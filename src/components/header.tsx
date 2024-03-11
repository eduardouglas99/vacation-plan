import styled from 'styled-components';
import React from 'react';

export default function Header () {
    const currentYear = new Date().getFullYear();
    return (
        <HeaderHome className='flex'>
            <CurrentYear>{currentYear}</CurrentYear>
        </HeaderHome>
    )
}

const HeaderHome = styled.header`
    justify-content: space-between;
`

const CurrentYear = styled.h1`
    font-size: 40px;
`
