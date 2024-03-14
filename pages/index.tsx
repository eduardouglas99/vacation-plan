import CalendarContext from "@/common/context";
import Calendar from "@/components/calendar";
import Header from "@/components/header";
import Modal from "@/components/modal";
import Sheet from "@/components/sheet";
import { HolidaysPlanProps } from "@/interface/Holidays";
import { fetchHolidays } from "@/services/holidays.service";
import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
    const responseHolidays = await fetchHolidays();
    return {
        props: {
            responseHolidays: responseHolidays
        }
    };
};

export default function Home({ responseHolidays }: { responseHolidays: HolidaysPlanProps[] }) {
    const { setHolidays } = useContext(CalendarContext);
    useEffect(() => {
        setHolidays(responseHolidays);
    }, [responseHolidays]);
    return (
        <section>
            <Header />
            <Calendar />
            <Modal />
            <Sheet />
        </section>
    );
}