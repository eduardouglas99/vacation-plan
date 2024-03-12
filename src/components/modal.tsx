import CalendarContext from "@/common/context";
import { useContext } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export default function Modal() {
    const { isModalOpen, ModalCalendarToogle } = useContext(CalendarContext);

    if (!isModalOpen) {
        return null;
    }

    return(
        <ModalOverlay>
            <ModalWrapper>
                <ModalHome>
                    <ModalTitle>Create a vacation plan</ModalTitle>
                    <CloseModal onClick={ModalCalendarToogle}/>,
                </ModalHome>
            </ModalWrapper>
        </ModalOverlay>
    )
}

const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999999;
`

const ModalWrapper = styled.div`
    width: 500px;
    height: 600px;
`

const ModalHome = styled.div`
    background: white;
    height:100%;
    width:100%;
    border-radius: 15px;
    padding: 30px;
    position: relative;
`

const ModalTitle = styled.h3`
    font-weight: 400;
`
const CloseModal = styled(IoMdClose)`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    background-color: black;
    width: 40px;
    height: 40px;
    color: #fff;
    border-top-right-radius: 8px;
    padding: 6px;
    &:hover {
        background-color: #2f2f2f;
    }
`