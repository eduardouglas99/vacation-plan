import CalendarContext from "@/common/context";
import Calendar from "@/components/calendar/calendar";
import FeedbackError from "@/components/feedbackError/feedbackError";
import Header from "@/components/header/header";
import Modal from "@/components/modal/modal";
import Sheet from "@/components/sheet/sheet";
import { ResponseDataProps } from "@/interface/Holidays";
import { fetchEmployees } from "@/services/employees.service";
import { fetchHolidays } from "@/services/holidays.service";
import { fetchVacationPlan } from "@/services/vacationPlan.service";
import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
    const responseHolidays = await fetchHolidays();
    const responseVacationPlan = await fetchVacationPlan();
    const responseEmployees = await fetchEmployees();
    return {
        props: {
            responseData: {
                responseHolidays: responseHolidays || null,
                responseVacationPlan: responseVacationPlan || null,
                responseEmployees: responseEmployees || null,
            }
        },
    };
};

export default function Home({ responseData }: { responseData: ResponseDataProps }) {
    const { setHolidays, setVacationPlan, setEmployees } = useContext(CalendarContext);
    useEffect(() => {
        setHolidays(responseData.responseHolidays);
        setVacationPlan(responseData.responseVacationPlan);
        setEmployees(responseData.responseEmployees);
    }, [responseData]);
    
    return (
        <section>
            <Header />
            <Calendar />
            <Modal />
            <Sheet />
            <FeedbackError />
        </section>
    );
}