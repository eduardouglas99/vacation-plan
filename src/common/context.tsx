import { CalendarProps, HolidaysPlanProps } from "@/interface/Holidays";
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
    setHolidayRegister: React.Dispatch<SetStateAction<HolidaysServiceProps | undefined>>
}

type HolidaysServiceProps = {
    id: number,
    participant: string,
    title: string,
    description: string,
    location: string,
    initialPeriod: Date,
    endPeriod: Date,
}

const CalendarContext = createContext({} as CalendarContextProps);
CalendarContext.displayName = "Calendar";
export default CalendarContext;

export function CalendarProvider({children} : CalendarProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
    const [holidayData, setHolidayData] = useState<HolidaysPlanProps>();
    const [holidayRegister, setHolidayRegister] = useState<HolidaysServiceProps>();

    const ModalCalendarToogle = () => {
        setIsModalOpen(current => !current);
    }

    const SheetCalendarToogle = () => {
        setIsSheetOpen(current => !current);

    }

    const value = useMemo(() => ({
        isModalOpen, setIsModalOpen, ModalCalendarToogle, isSheetOpen, setIsSheetOpen, SheetCalendarToogle,
        holidayData, setHolidayData, holidayRegister, setHolidayRegister
    }), [
        isModalOpen, setIsModalOpen, ModalCalendarToogle, isSheetOpen, setIsSheetOpen, SheetCalendarToogle,
        holidayData, setHolidayData, holidayRegister, setHolidayRegister
    ])

    return(
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    )
}