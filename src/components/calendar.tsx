import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { addMonths, isSameMonth } from 'date-fns';
import { pt } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

export default function Calendar() {
    const initialDays: Date[] = [];
    const today = new Date();
    const nextMonth = addMonths(new Date(), 1);
    const [days, setDays] = React.useState<Date[] | undefined>(initialDays);
    const [month, setMonth] = useState<Date>(nextMonth);
    
    return(
        <>
            <DayPicker 
                mode="multiple"
                min={1}
                selected={days}
                onSelect={setDays}
                numberOfMonths={4}
                locale={pt}
                pagedNavigation 
                month={month} 
                onMonthChange={setMonth}
            />

            <BackTodayButton disabled={isSameMonth(today, month)} onClick={() => setMonth(today)}>
                Back to Today
            </BackTodayButton>
        </>
    )
}

const BackTodayButton = styled.button`
    background: transparent;
    margin: 40px auto;
    text-align: center;
    width: 100%;
    &:hover {
        text-decoration: underline;
    }
`