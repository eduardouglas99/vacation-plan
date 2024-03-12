import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { isSameMonth } from 'date-fns';
import { pt } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';
import { eachDayOfInterval, addDays, subDays } from 'date-fns';

type HolidaysPlanProps = {
    id: number,
    title: string,
    description: string,
    location: string,
    date: Date
}

type HolidaysServiceProps = {
    id: number,
    name: string,
    title: string,
    description: string,
    location: string,
    initialPeriod: Date,
    endPeriod: Date,
}


export default function Calendar() {
    const data: HolidaysPlanProps[] = [
        {
            id: 0,
            title: '',
            description: '',
            location: '',
            date: new Date('2024-03-10T00:00:00.000Z')
        },
        {
            id: 1,
            title: '',
            description: '',
            location: '',
            date: new Date('2024-03-11T00:00:00.000Z')
        }
    ]

    const holidaysRegister: HolidaysServiceProps[] = [
        {
            id: 0,
            title: '',
            name: '', 
            description: '',
            initialPeriod: new Date('2024-04-02T03:00:00.000Z'),
            endPeriod: new Date('2024-04-10T03:00:00.000Z'),
            location: ''
        },
        {
            id: 1,
            title: '',
            name: '', 
            description: '',
            initialPeriod: new Date('2024-03-18T03:00:00.000Z'),
            endPeriod: new Date('2024-03-20T03:00:00.000Z'),
            location: ''
        },
        {
            id: 2,
            title: '',
            name: '', 
            description: '',
            initialPeriod: new Date('2024-05-15T03:00:00.000Z'),
            endPeriod: new Date('2024-05-15T03:00:00.000Z'),
            location: ''
        }
    ]

    const splitArray = (data: HolidaysServiceProps[]) => {
        const booked: Date[] = [];
        const range_start: Date[] = [];
        const range_middle: Date[] = [];
        const range_end: Date[] = [];

        data.map((holiday) => {
            if (holiday.initialPeriod.toISOString() === holiday.endPeriod.toISOString()) {
                booked.push(holiday.initialPeriod);
                return;
            }
            range_start.push(holiday.initialPeriod);
            range_end.push(holiday.endPeriod);
            range_middle.push(...eachDayOfInterval({
                end: subDays(holiday.endPeriod, 1),
                start: addDays(holiday.initialPeriod, 1)
            }))
            return;
        })
        return {
            booked,
            range_start,
            range_middle,
            range_end
        }
    }

    const today = new Date();
    const [days, setDays] = React.useState<Date[]>([]);
    const [month, setMonth] = useState<Date>(new Date());
    const bookedStyle = { border: '2px solid #000' };
    const startStyle = { border: '2px solid red' };
    const endStyle = { border: '2px solid blue' };
    const middleStyle = { border: '2px solid pink' };

    useEffect(() => {
        data.map((day: HolidaysPlanProps) => {
            setDays(state => [...state, day.date]);
        })    
    }, [])

    return(
        <>
            <DayPicker 
                mode="multiple"
                min={1}
                selected={days}
                numberOfMonths={4}
                locale={pt}
                pagedNavigation 
                month={month} 
                onMonthChange={setMonth}
                fixedWeeks
                modifiers={
                    splitArray(holidaysRegister)
                }
                modifiersStyles={{ booked: bookedStyle, range_start: startStyle, range_end: endStyle, range_middle: middleStyle  }}
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