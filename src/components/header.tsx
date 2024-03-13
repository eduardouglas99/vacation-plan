import styled from 'styled-components';
import React from 'react';
import Button from './button';

export default function Header () {
    const currentYear = new Date().getFullYear();
    return (
        <HeaderHome className='flex'>
            <CurrentYear>{currentYear}</CurrentYear>
            <Button />
        </HeaderHome>
    )
}

const HeaderHome = styled.header`
    justify-content: space-between;
    padding: 0 0 80px 0;
    @media only screen and (max-width: 580px) {
        padding: 0 0 50px 0;
    }
`

const CurrentYear = styled.h1`
    font-size: 40px;
    @media only screen and (max-width: 580px) {
        font-size: 32px;
    }
`
