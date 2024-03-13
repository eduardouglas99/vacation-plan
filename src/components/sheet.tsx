import { useContext} from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import CalendarContext from "@/common/context";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function Sheet() {
    const { isSheetOpen, SheetCalendarToogle, holidayData, holidayRegister } = useContext(CalendarContext);

    if (!isSheetOpen) {
        return null;
    }
    
    return(
        <ModalOverlay>
            <ModalWrapper>
                <ModalHome>
                    <ModalTitle>Holidays plan information</ModalTitle>
                    <CloseModal onClick={SheetCalendarToogle}/>
                    <LineBlock></LineBlock>
                    {holidayData ? (
                        <InfoGroup>
                            <h1>Title: {holidayData.title}</h1>
                            <TextGroup>
                                <FaFileAlt />
                                <b>Description:</b> 
                                <span>{holidayData.description}</span>
                            </TextGroup>

                            <TextGroup>
                                <IoLocationSharp />
                                <b>Location:</b> 
                                <span>{holidayData.location}</span>
                            </TextGroup>

                            <TextGroup>
                                <FaCalendar />
                                <b>Date:</b> 
                                <span>{holidayData.date.toLocaleDateString()}</span>
                            </TextGroup>
                        </InfoGroup>
                    ) : null}

                    <LineBlock></LineBlock>

                    {holidayRegister ? (
                        <InfoGroup>
                            <h2>Title: {holidayRegister.title}</h2>
                            <TextGroup>
                                <FaFileAlt />
                                <b>Description:</b> 
                                <span>{holidayRegister.description}</span>
                            </TextGroup> 

                            <TextGroup>
                                <FaUserCheck />
                                <b>Participants:</b> 
                                <span>{holidayRegister.name}</span>
                            </TextGroup> 

                            <TextGroup>
                                <IoLocationSharp />
                                <b>Location:</b> 
                                <span>{holidayRegister.location}</span>
                            </TextGroup> 

                            <TextGroup>
                                <FaCalendar />
                                <b>From:</b> 
                                <span>{holidayRegister.initialPeriod.toLocaleDateString()}</span>
                            </TextGroup>

                            <TextGroup>
                                <FaCalendar />
                                <b>To:</b> 
                                <span>{holidayRegister.endPeriod.toLocaleDateString()}</span>
                            </TextGroup> 
                        </InfoGroup>
                    ) : null}
                </ModalHome>
            </ModalWrapper>
        </ModalOverlay>
    )
}


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999999;
    transition: all .2s ease;
`

const ModalWrapper = styled.div`
    width: 600px;
    height: 100%;
    right: 0;
    position: absolute;
`

const ModalHome = styled.div`
    background: white;
    height:100%;
    width:100%;
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
    width: 40px;
    height: 40px;
    color: #fff;
    padding: 6px;
    transition: all .2s ease;
    color: #fff;
    background-color: #2f2f2f;
    &:hover {
        background-color: #414141;
    }
`
const LineBlock = styled.div`
    width: 100%;
    height: 1px;
    background-color: #00000014;
    position: unset;
    left: 0;
    margin: 24px 0;
`

const InfoGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2 {
        color: #1E1E1E;
        font-size: 20px;
    }
`
const TextGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    b, svg {
        color: #1E1E1E;
    }
    svg {
        color: #1E1E1E;
    }
`