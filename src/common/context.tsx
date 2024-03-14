import { EmployeesProps, HolidaysPlanProps, HolidaysServiceProps } from "@/interface/Holidays";
import { createVacationPlan } from "@/services/vacationPlan.service";
import { formatISO, parseISO } from "date-fns";
import { SetStateAction, createContext, useMemo, useState } from "react";

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
    genericFilterPeriod: (initialPeriod: string, endPeriod: string) => HolidaysServiceProps[]
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

    const ModalCalendarToogle = () => {
        setIsModalOpen(current => !current);
    }

    const SheetCalendarToogle = () => {
        setIsSheetOpen(current => !current);

    }

    const genericFilterPeriod = (initialPeriod: string, endPeriod: string) => {
        const format = parseISO(initialPeriod).getTime();
        const formt2 = parseISO(endPeriod).getTime();
        const item = vacationPlan.filter(item => parseISO(item.initialPeriod).getTime() === format || 
        parseISO(item.endPeriod).getTime() === formt2)

        console.log(format, formt2)
        return item;
    }

    const createPlan = (vacation : HolidaysServiceProps) => {
        createVacationPlan(vacation);
    }

    const value = useMemo(() => ({
        isModalOpen, setIsModalOpen, ModalCalendarToogle, isSheetOpen, setIsSheetOpen, SheetCalendarToogle,
        holidayData, setHolidayData, holidayRegister, setHolidayRegister, holidays, setHolidays,vacationPlan, setVacationPlan,
        employees, setEmployees, createPlan, genericFilterPeriod
    }), [
        isModalOpen, setIsModalOpen, ModalCalendarToogle, isSheetOpen, setIsSheetOpen, SheetCalendarToogle,
        holidayData, setHolidayData, holidayRegister, setHolidayRegister, holidays, setHolidays, vacationPlan, setVacationPlan,
        employees, setEmployees, createPlan, genericFilterPeriod
    ])

    return(
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    )
}