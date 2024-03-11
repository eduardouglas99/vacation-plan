import styled from "styled-components";

export default function Button() {
    return (
        <ButtonHome>New vacation plan</ButtonHome>
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