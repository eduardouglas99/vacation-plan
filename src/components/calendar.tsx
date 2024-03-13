import React, { useContext, useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { isSameMonth } from 'date-fns';
import { pt } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';
import { eachDayOfInterval, addDays, subDays, isWithinInterval } from 'date-fns';
import CalendarContext from '@/common/context';

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
            title: 'Feriado ex 1',
            description: 'feriado homenagem a fulano',
            location: 'algarves',
            date: new Date('2024-03-10T03:00:00.000Z')
        },
        {
            id: 1,
            title: 'feriado exemplo 2',
            description: 'feriado dia das mulheres',
            location: 'porto',
            date: new Date('2024-03-11T03:00:00.000Z')
        }
    ]

    const holidaysRegister: HolidaysServiceProps[] = [
        {
            id: 0,
            title: 'ferias coletivas',
            name: 'anselmo', 
            description: 'ex1',
            initialPeriod: new Date('2024-04-02T03:00:00.000Z'),
            endPeriod: new Date('2024-04-10T03:00:00.000Z'),
            location: 'lisboa'
        },
        {
            id: 1,
            title: 'ferias 3 semanas',
            name: 'lurdes', 
            description: 'ex2',
            initialPeriod: new Date('2024-03-18T03:00:00.000Z'),
            endPeriod: new Date('2024-03-20T03:00:00.000Z'),
            location: 'japão'
        },
        {
            id: 2,
            title: 'periodo sabatico',
            name: 'joaquin, plabo, tavares', 
            description: 'ex3',
            initialPeriod: new Date('2024-05-15T03:00:00.000Z'),
            endPeriod: new Date('2024-05-15T03:00:00.000Z'),
            location: 'brasil'
        },
        {
            id: 3,
            title: 'pascoa seletiva',
            description: 'coelho',
            location: 'porto das galinhas',
            initialPeriod: new Date('2024-03-11T03:00:00.000Z'),
            endPeriod: new Date('2024-03-12T03:00:00.000Z'),
            name: 'Gilberto'
        }
    ]

    const today = new Date();
    const [days, setDays] = React.useState<Date[]>([]);
    const [month, setMonth] = useState<Date>(new Date());
    const bookedStyle = { background: '#ff000024' };
    const startStyle = { background: '#ff000024', borderBottomLeftRadius: '50%',
    borderTopLeftRadius: '50%' };
    const endStyle = { background: '#ff000024', borderBottomRightRadius: '50%',
    borderTopRightRadius: '50%'  };
    const middleStyle = { background: '#ff000024' };
    const { SheetCalendarToogle, ModalCalendarToogle, holidayData, setHolidayData, holidayRegister, setHolidayRegister } = useContext(CalendarContext);


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

    const SearchInformationPeriod = (day: Date) => {
        const newDateFormat = day.toDateString();
        const haveHolidayPlan = data.find(d => d.date.toDateString() === newDateFormat);
        const haveHolidayRegister = holidaysRegister.find(date => 
            date.initialPeriod.toDateString() === newDateFormat || 
            date.endPeriod.toDateString() === newDateFormat ||
            isWithinInterval(newDateFormat, {
                end: date.endPeriod,
                start: date.initialPeriod
            }));

        if(!haveHolidayPlan && !haveHolidayRegister){
            setHolidayRegister(undefined);
            setHolidayData(undefined);
            return;
        }

        SheetCalendarToogle();

        if (!haveHolidayPlan) { 
            setHolidayData(undefined);
        } else {
            setHolidayData(haveHolidayPlan);
        }
        
        if(!haveHolidayRegister){
            setHolidayRegister(undefined);
        } else {
            setHolidayRegister(haveHolidayRegister); 
        }
    }


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
                onDayClick={SearchInformationPeriod}
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