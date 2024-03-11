import CalendarContext from "@/common/context";
import { useContext } from "react";
import styled from "styled-components";

export default function Modal() {
    const { isModalOpen } = useContext(CalendarContext);

    if (!isModalOpen) {
        return null;
    }

    return(
        <ModalOverlay>
            <ModalWrapper>
                <ModalHome>
                    <ModalTitle>Create a vacation plan</ModalTitle>
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
`

const ModalTitle = styled.h3`
    /* margin: 20px 0; */
    font-weight: 400;
`