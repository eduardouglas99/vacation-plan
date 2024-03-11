import CalendarContext from "@/common/context";
import Calendar from "@/components/calendar";
import Header from "@/components/header";
import Modal from "@/components/modal";
import { useContext } from "react";

export default function Home() {
    return(
        <section>
            <Header />
            <Calendar />
            <Modal />
        </section>
    )
}