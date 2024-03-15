
import { EmployeesProps, HolidaysPlanProps, HolidaysServiceProps } from "@/interface/Holidays";
import { createVacationPlan, deleteVacationPlan, updateVacationPlan } from "@/services/vacationPlan.service";
import { format, isWithinInterval } from "date-fns";
import { SetStateAction, createContext, useMemo, useState } from "react";
import generatePDF, { Margin } from "react-to-pdf";

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
    setHolidayPdf: React.Dispatch<SetStateAction<HolidaysServiceProps | null>>
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

    const [holidayData, setHolidayData] = useState<HolidaysPlanProps>();
    const [holidayRegister, setHolidayRegister] = useState<HolidaysServiceProps>();

    const [holidays, setHolidays] = useState<HolidaysPlanProps[]>([]);
    const [vacationPlan, setVacationPlan] = useState<HolidaysServiceProps[]>([]);
    const [employees, setEmployees] = useState<EmployeesProps[]>([]);
    const [editData, setEditData] = useState<HolidaysServiceProps | null>(null);
    const [holidayPDF, setHolidayPdf] = useState<HolidaysServiceProps | null>(null);


    const ModalCalendarToogle = () => {
        setIsModalOpen(current => !current);
    }

    const SheetCalendarToogle = () => {
        setIsSheetOpen(current => !current);

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
        try {
            await createVacationPlan(vacation)
                .then(() => {
                    setVacationPlan((prev) => [...prev, vacation]);
                    setHolidayPdf(vacation)

                    // const options = {
                    //     method: 'open',
                    //     page: {
                    //        // margin is in MM, default is Margin.NONE = 0
                    //        margin: Margin.MEDIUM,
                    //        // default is 'A4'
                    //        format: 'A4',
                    //        // default is 'portrait'
                    //        orientation: 'portrait',
                    //     }
                    //   };

                    // const getTargetElement = () => document.getElementById('content-id');

                    // // const pdfData = {
                    // //     // Inclua aqui os detalhes do plano de férias que você deseja no PDF
                    // //     title: vacation.title,
                    // // };
                    // generatePDF(getTargetElement, options)
                })
                .catch ((error) =>  {
                    console.error('Erro ao criar plano de férias:', error);
                })

        } catch (error) {
            console.error('Erro na requisição do criar plano de férias:', error);
        }
    }

    const deletePlan = async (vacation : HolidaysServiceProps) => {
        const newArray = vacationPlan.filter((item) => item.id !== vacation.id);
        try {
            await deleteVacationPlan(vacation)
            .then(() => {
                setVacationPlan(newArray);
                SheetCalendarToogle();
            })
            .catch ((error) =>  {
                console.error('Erro ao apagar plano de férias:', error);
            })
        } catch (error) {
            console.error('Erro na requisição do apagar plano de férias:', error);
        }
    }

    const updatePlan = async (vacation : HolidaysServiceProps) => {
        try {
            await updateVacationPlan(vacation)
            .then(() => {
                setVacationPlan((prev) => {
                    const updatedVacationPlan = prev.map(item => {
                        if (item.id === vacation.id) {
                            return { ...item, ...vacation };
                        }
                        return item;
                    });
                    return updatedVacationPlan;
                });
            })
            .catch ((error) =>  {
                console.error('Erro ao atualizar plano de férias:', error);
            })
            
        } catch (error) {
            console.error('Erro na requisição do atualizar plano de férias:', error);
        }
    }

    const value = useMemo(() => ({
        isModalOpen, setIsModalOpen, ModalCalendarToogle, isSheetOpen, setIsSheetOpen, SheetCalendarToogle,
        holidayData, setHolidayData, holidayRegister, setHolidayRegister, holidays, setHolidays,vacationPlan, setVacationPlan,
        employees, setEmployees, createPlan, genericFilterPeriod, deletePlan, updatePlan, editData, setEditData, holidayPDF, setHolidayPdf
    }), [
        isModalOpen, setIsModalOpen, ModalCalendarToogle, isSheetOpen, setIsSheetOpen, SheetCalendarToogle,
        holidayData, setHolidayData, holidayRegister, setHolidayRegister, holidays, setHolidays, vacationPlan, setVacationPlan,
        employees, setEmployees, createPlan, genericFilterPeriod, deletePlan, updatePlan, editData, setEditData, holidayPDF, setHolidayPdf
    ])

    return(
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    )
}