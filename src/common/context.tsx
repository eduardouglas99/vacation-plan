import { EmployeesProps, HolidaysPlanProps, HolidaysServiceProps } from "@/interface/Holidays";
import { createVacationPlan, deleteVacationPlan, updateVacationPlan } from "@/services/vacationPlan.service";
import { format, isWithinInterval } from "date-fns";
import { SetStateAction, createContext, useMemo, useState } from "react";
import generatePDF from '../components/vacationPlanPdf/vacationPlanPdf';

type CalendarContextProps = {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>,
    ModalCalendarToogle: () => void,
    isSheetOpen: boolean,
    setIsSheetOpen: React.Dispatch<SetStateAction<boolean>>,
    SheetCalendarToogle: () => void,
    holidayData: HolidaysPlanProps | undefined,
    setHolidayData: React.Dispatch<SetStateAction<HolidaysPlanProps | undefined>>,
    holidayRegister: HolidaysServiceProps | undefined,
    setHolidayRegister: React.Dispatch<SetStateAction<HolidaysServiceProps | undefined>>,
    holidays: HolidaysPlanProps[],
    setHolidays: React.Dispatch<SetStateAction<HolidaysPlanProps[]>>
    vacationPlan: HolidaysServiceProps[],
    setVacationPlan: React.Dispatch<SetStateAction<HolidaysServiceProps[]>>
    employees: EmployeesProps[],
    setEmployees: React.Dispatch<SetStateAction<EmployeesProps[]>>
    createPlan: (vacation: HolidaysServiceProps) => void,
    deletePlan: (vacation: HolidaysServiceProps) => void,
    updatePlan: (vacation: HolidaysServiceProps) => void,
    genericFilterPeriod: (initialPeriod: string, endPeriod: string) => HolidaysServiceProps[],
    editData: HolidaysServiceProps | null,
    setEditData: React.Dispatch<SetStateAction<HolidaysServiceProps | null>>,
    holidayPDF: HolidaysServiceProps | null,
    setHolidayPdf: React.Dispatch<SetStateAction<HolidaysServiceProps | null>>,
    isFeedbackError: boolean,
    setFeedbackError: React.Dispatch<SetStateAction<boolean>>,
    feedbackErrorToogle: () => void,
    errorServerRequest: boolean,
    setErrorServerRequest: React.Dispatch<SetStateAction<boolean>>,
}

type CalendarProps = {
    children: React.ReactNode;
}

const CalendarContext = createContext({} as CalendarContextProps);
CalendarContext.displayName = "Calendar";
export default CalendarContext;

export function CalendarProvider({children} : CalendarProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
    const [isFeedbackError, setFeedbackError] = useState<boolean>(false);

    const [holidayData, setHolidayData] = useState<HolidaysPlanProps>();
    const [holidayRegister, setHolidayRegister] = useState<HolidaysServiceProps>();

    const [holidays, setHolidays] = useState<HolidaysPlanProps[]>([]);
    const [vacationPlan, setVacationPlan] = useState<HolidaysServiceProps[]>([]);
    const [employees, setEmployees] = useState<EmployeesProps[]>([]);
    const [editData, setEditData] = useState<HolidaysServiceProps | null>(null);
    const [holidayPDF, setHolidayPdf] = useState<HolidaysServiceProps | null>(null);

    const [errorServerRequest, setErrorServerRequest] = useState<boolean>(false);

    const ModalCalendarToogle = () => {
        setIsModalOpen(current => !current);
    }

    const SheetCalendarToogle = () => {
        setIsSheetOpen(current => !current);
    }

    const feedbackErrorToogle = (erroRequest?: boolean) => {
        if(erroRequest) {
            setErrorServerRequest(true);
            setFeedbackError(current => !current);
            setTimeout(() => {
                setFeedbackError(false);
                setErrorServerRequest(false);
            }, 10000)
            return;
        }
        setFeedbackError(current => !current);
        setTimeout(() => {
            setFeedbackError(false);
        }, 10000)
    }

    const genericFilterPeriod = (initialPeriod: string, endPeriod: string) => {
        const formatInitialPeriod = format(new Date(initialPeriod), 'yyyy-MM-dd\'T\'HH:mm:ss.SSSXXX');
        const formtatEndPeriod = format(new Date(endPeriod), 'yyyy-MM-dd\'T\'HH:mm:ss.SSSXXX');

        const item = vacationPlan.filter(item => isWithinInterval(formatInitialPeriod, {
            end: item.endPeriod,
            start: item.initialPeriod
        }) || isWithinInterval(formtatEndPeriod, {
            end: item.endPeriod,
            start: item.initialPeriod
        }))

        return item;
    }

    const createPlan = async (vacation : HolidaysServiceProps) => {
        if(!vacation) null
        try {
            await createVacationPlan(vacation)
            setVacationPlan((prev) => [...prev, vacation]);
            setHolidayPdf(vacation);
            generatePDF(vacation);
        } catch (error) {
            setErrorServerRequest(true);
            feedbackErrorToogle(true);
        }
    }

    const deletePlan = async (vacation : HolidaysServiceProps) => {
        if(!vacation) null
        const newArray = vacationPlan.filter((item) => item.id !== vacation.id);
        try {
            await deleteVacationPlan(vacation)
            setVacationPlan(newArray);
            SheetCalendarToogle();
        } catch (error) {
            setErrorServerRequest(true);
            feedbackErrorToogle(true);
        }
    }

    const updatePlan = async (vacation : HolidaysServiceProps) => {
        if(!vacation) null
        try {
            await updateVacationPlan(vacation)
            setVacationPlan((prev) => {
                const updatedVacationPlan = prev.map(item => {
                    if (item.id === vacation.id) {
                        return { ...item, ...vacation };
                    }
                    return item;
                });
                return updatedVacationPlan;
            });
            generatePDF(vacation);
        } catch (error) {
            setErrorServerRequest(true);
            feedbackErrorToogle(true);
        }
    }

    const value = useMemo(() => ({
        isModalOpen, setIsModalOpen, ModalCalendarToogle, isSheetOpen, setIsSheetOpen, SheetCalendarToogle,
        holidayData, setHolidayData, holidayRegister, setHolidayRegister, holidays, setHolidays,vacationPlan, setVacationPlan,
        employees, setEmployees, createPlan, genericFilterPeriod, deletePlan, updatePlan, editData, setEditData, holidayPDF, setHolidayPdf,
        isFeedbackError, setFeedbackError, feedbackErrorToogle, errorServerRequest, setErrorServerRequest
    }), [
        isModalOpen, setIsModalOpen, ModalCalendarToogle, isSheetOpen, setIsSheetOpen, SheetCalendarToogle,
        holidayData, setHolidayData, holidayRegister, setHolidayRegister, holidays, setHolidays, vacationPlan, setVacationPlan,
        employees, setEmployees, createPlan, genericFilterPeriod, deletePlan, updatePlan, editData, setEditData, holidayPDF, setHolidayPdf,
        isFeedbackError, setFeedbackError, feedbackErrorToogle, errorServerRequest, setErrorServerRequest
    ])

    return(
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    )
}