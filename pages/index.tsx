import Calendar from "@/components/calendar";
import Header from "@/components/header";
import Modal from "@/components/modal";
import Sheet from "@/components/sheet";

export default function Home() {
    return(
        <section>
            <Header />
            <Calendar />
            <Modal />
            <Sheet />
        </section>
    )
}