import { SetStateAction, createContext, useMemo, useState } from "react";

type CalendarContextProps = {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>,
    ModalCalendarToogle: () => void
}

type CalendarProps = {
    children: React.ReactNode;
}

const CalendarContext = createContext({} as CalendarContextProps);
CalendarContext.displayName = "Calendar";
export default CalendarContext;

export function CalendarProvider({children} : CalendarProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const ModalCalendarToogle = () => {
        setIsModalOpen(current => !current);
    }

    const value = useMemo(() => ({
        isModalOpen, setIsModalOpen, ModalCalendarToogle
    }), [
        isModalOpen, setIsModalOpen, ModalCalendarToogle
    ])

    return(
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    )
}