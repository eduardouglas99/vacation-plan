import styled, { keyframes } from 'styled-components';
import { useContext } from 'react';
import CalendarContext from '@/common/context';
import { IoMdClose } from "react-icons/io";

export default function FeedbackError () {
  const { isFeedbackError, feedbackErrorToogle, errorServerRequest } = useContext(CalendarContext);

  if(!isFeedbackError) return false;

  return (
    <ModalFeedback>
      <div className="blockContent">
        <ButtonCloseModal type="button" onClick={feedbackErrorToogle}>
          <IoMdClose />
        </ButtonCloseModal>
        <div className="flex textualFeedback">
            <TitleFeedbackError>
              {errorServerRequest ? "We found a problem"  : "Period not allowed"}
            </TitleFeedbackError>
            <TextualContentFeedbackError>
              {errorServerRequest ? "There was a problem with this action, please try again later." : "Please choose the allowed dates in the calendar."}
            </TextualContentFeedbackError>
        </div>
      </div>
    </ModalFeedback>
  );
};

const scrollAnimation = keyframes`
    from {transform: translateX(100%);}
    to {transform: translateX(6%)}
`;

const load = keyframes`
    0% {
        width: 0;
    }
    25% {
        width: 25%;
    }
    50% {
        width: 50%;
    }
    75% {
        width: 75%;
    }
    100% {
        width: 100%;
    }
`;

const BlockFeedback = styled.div`
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  display: flex;
  z-index: 2147483647;
  width: 100%;
`;

const TitleFeedbackError = styled.h2`
  font-weight: bold;
  padding: 0px;
  font-size: 14px;
  text-transform: uppercase;
`;

const TextualContentFeedbackError = styled.h4`
  margin: 0px auto;
  font-size: 11px;
  font-weight: 100;
`;

const ButtonCloseModal = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  border: none;
  padding: 10px;
  color: rgb(255, 255, 255);
  font-size: 10px;
  cursor: pointer;
`;

const ModalFeedback = styled(BlockFeedback)`
  max-width: 310px;
  right: 10px;
  top: 10px;
  color: rgb(255, 255, 255);
  flex-direction: column;
  background: rgb(231, 76, 60);
  animation: ${scrollAnimation} 0.5s linear;
  .blockContent {
    width: 100%;
    padding: 14px 20px 14px 10px;
    display: flex;
    gap: 6px;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    -webkit-box-align: center;
    align-items: center;
    button {
      background: rgb(231, 76, 60);
      &:hover {
        background: #d7362a;
      }
    }
    .textualFeedback {
      flex-direction: column;
      padding: 8px 10px;
      gap: 10px;
      text-align: left;
      align-items: flex-start;
    }
    &::after {
      content: '';
      bottom: -1px;
      background: rgb(255 255 255);
      width: 100%;
      height: 4px;
      position: absolute;
      left: 0;
      animation: ${load} 3.4s linear;
    }
    @media only screen and (max-width: 768px) {
      padding: 23px 20px 23px 10px;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    right: 0px;
    bottom: 0px;
    top: initial;
  }
`;