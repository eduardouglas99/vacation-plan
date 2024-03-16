import { useContext} from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import CalendarContext from "@/common/context";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { format } from "date-fns";
import Image from "next/image";


export default function Sheet() {
    const { isSheetOpen, SheetCalendarToogle, holidayData, holidayRegister, deletePlan, setEditData, ModalCalendarToogle } = useContext(CalendarContext);

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
                            <h2>Title: {holidayData.name}</h2>
                            <TextGroup>
                                <Image src="/icons/file.png" alt="Description" title="Description" width={20} height={20}/>
                                <b>Description:</b> 
                                <span className="description">{holidayData.description}</span>
                            </TextGroup>
                            
                            <TextGroup>
                                <Image src="/icons/location.png" alt="Location" title="Location" width={20} height={20}/>
                                <b>Location:</b> 
                                <span>{holidayData.location}</span>
                            </TextGroup>

                            <TextGroup>
                                <Image src="/icons/calendar.png" alt="Date" title="Date" width={20} height={20}/>
                                <b>Date:</b> 
                                <span>{format(holidayData.date, "dd/MM/yyyy")}</span>
                            </TextGroup>
                            <LineBlock></LineBlock>
                        </InfoGroup>
                    ) : null}

                    {holidayRegister ? (
                        <InfoGroup>
                            <TextGroupTitle>
                                <h2>Title: {holidayRegister.title}</h2>
                                <TextGroupIcons>
                                    <Image 
                                        src="/icons/edit.png" alt="Edit plan" title="Edit Plan" 
                                        style={{cursor: 'pointer'}}
                                        width={24} height={24}onClick={() => {
                                        setEditData(holidayRegister);
                                        SheetCalendarToogle();
                                        ModalCalendarToogle();
                                    }} />
                                    <Image 
                                        src="/icons/trash.png" alt="Remove plan" title="Remove plan" 
                                        style={{cursor: 'pointer'}}
                                        width={24} height={24} onClick={() => deletePlan(holidayRegister)}/>
                                </TextGroupIcons>
                            </TextGroupTitle>
                            <TextGroup>
                                <Image src="/icons/file.png" alt="Description" title="Description" width={20} height={20}/>
                                <b>Description:</b> 
                                <span className="description">{holidayRegister.description}</span>
                            </TextGroup> 

                            <TextGroup>
                                <Image src="/icons/users.png" alt="Participants" title="Participants" width={20} height={20}/>
                                <b>Participants:</b> 
                                <span>{holidayRegister.names.map(name => name.label).join(', ')}</span>
                            </TextGroup> 

                            <TextGroup>
                                <Image src="/icons/calendar.png" alt="From" title="From" width={20} height={20}/>
                                <b>From:</b> 
                                <span>{format(holidayRegister.initialPeriod, "dd/MM/yyyy")}</span>
                            </TextGroup>

                            <TextGroup>
                                <Image src="/icons/calendar.png" alt="To" title="To" width={20} height={20}/>
                                <b>To:</b> 
                                <span>{format(holidayRegister.endPeriod, "dd/MM/yyyy")}</span>
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
    @media only screen and (max-width: 1280px){
        width: 450px;
    }
    @media only screen and (max-width: 768px){
        width: 340px;
    }
    @media only screen and (max-width: 580px) {
        width: 100%;
    }
`

const ModalHome = styled.div`
    background: white;
    height: 100%;
    width: 100%;
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
    margin: 20px 0;
`

const InfoGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    h2 {
        color: #1E1E1E;
        font-size: 20px;
        @media only screen and (max-width: 768px){
            font-size: 18px;
        }
    }
    @media only screen and (max-width: 580px){
        gap: 10px;
    }
`
const TextGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
    b, svg {
        color: #1E1E1E;
    }
    svg {
        color: #1E1E1E;
    }
    b {
        @media only screen and (max-width: 768px){
            font-size: 14px;
        }
    }
    span {
        @media only screen and (max-width: 768px){
            font-size: 13px;
        }
    }
    .description {
        max-width: 100%;
        width: 100%;
        word-wrap: break-word;
        max-height: 50px;
        overflow: overlay;
        &::-webkit-scrollbar {
        height: 4px;
        width: 4px;
        }
        &::-webkit-scrollbar-track {
        border-radius: 20px;
        background-color: #000000;
        }

        &::-webkit-scrollbar-track:hover {
        background-color: #B8C0C2;
        }

        &::-webkit-scrollbar-track:active {
        background-color: #B8C0C2;
        }

        &::-webkit-scrollbar-thumb {
        border-radius: 13px;
        background-color: #999999;
        }

        &::-webkit-scrollbar-thumb:hover {
        background-color: #C1C1C1;
        }

        &::-webkit-scrollbar-thumb:active {
        background-color: #616161;
        }
    }
`

const TextGroupTitle = styled(TextGroup)`
    justify-content: space-between;
`
const TextGroupIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    svg {
        font-size: 24px;
        cursor: pointer;
        &:last-child {
            color: #ff0000c4;
            font-size: 20px;
        }
    }
`


