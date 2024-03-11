import styled from 'styled-components';
import React from 'react';

export default function Header () {
    const currentYear = new Date().getFullYear();
    return (
        <HeaderHome>
            <CurrentYear>{currentYear}</CurrentYear>
        </HeaderHome>
    )
}

const HeaderHome = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CurrentYear = styled.h1`
    font-size: 40px;
`
