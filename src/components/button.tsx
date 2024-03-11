import CalendarContext from "@/common/context";
import { useContext } from "react";
import styled from "styled-components";

export default function Button() {
    const { ModalCalendarToogle } = useContext(CalendarContext);
    return (
        <ButtonHome onClick={ModalCalendarToogle}>New vacation plan</ButtonHome>
    )
}

const ButtonHome = styled.button`
    padding: 20px;
    background-color: #be0000;
    color: #fff;
    border-radius: 8px;
    &:hover {
        background-color: #8d0404;
    }
`