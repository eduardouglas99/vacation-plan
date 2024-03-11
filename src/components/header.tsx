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
`

const CurrentYear = styled.h1`
    font-size: 40px;
`
