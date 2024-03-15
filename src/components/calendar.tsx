import React, { useContext, useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { isSameMonth } from 'date-fns';
import { pt } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';
import { eachDayOfInterval, addDays, subDays, isWithinInterval } from 'date-fns';
import CalendarContext from '@/common/context';
import { useMediaQuery } from 'react-responsive';
import { HolidaysPlanProps, HolidaysServiceProps } from "@/interface/Holidays";

export default function Calendar() {
    const today = new Date();
    const [days, setDays] = React.useState<Date[]>([]);
    const [month, setMonth] = useState<Date>(new Date());
    const bookedStyle = { background: '#ff000024' };
    const startStyle = { background: '#ff000024', borderBottomLeftRadius: '50%', borderTopLeftRadius: '50%' };
    const endStyle = { background: '#ff000024', borderBottomRightRadius: '50%', borderTopRightRadius: '50%'  };
    const middleStyle = { background: '#ff000024' };
    const { SheetCalendarToogle , setHolidayData , setHolidayRegister, holidays, vacationPlan } = useContext(CalendarContext);


    const splitArray = (data: HolidaysServiceProps[]) => {
        const booked: Date[] = [];
        const range_start: Date[] = [];
        const range_middle: Date[] = [];
        const range_end: Date[] = [];

        data.map((holiday) => {
            if (holiday.initialPeriod === holiday.endPeriod) {
                const transformToDate = new Date(holiday.initialPeriod);
                booked.push(transformToDate);
                return;
            }
            const transformEndPeriod = new Date(holiday.endPeriod);
            const transformInitialPeriod = new Date(holiday.initialPeriod);
            range_start.push(transformInitialPeriod);
            range_end.push(transformEndPeriod);
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
        const newDateFormat = day.toISOString();
        const haveHolidayPlan = holidays.find(d => d.date === newDateFormat);
        const haveHolidayRegister = vacationPlan.find(date => 
            date.initialPeriod === newDateFormat || 
            date.endPeriod === newDateFormat ||
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

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        holidays.map((day: HolidaysPlanProps) => {
            const dataObject = new Date(day.date);
            setDays(state => [...state, dataObject]);
            setDomLoaded(true);
        })    
    }, [holidays])
    
    const isMobile = typeof window !== 'undefined' && useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = typeof window !== 'undefined' && useMediaQuery({ query: '(max-width: 980px)' });
    const isDesktop = typeof window !== 'undefined' && useMediaQuery({ query: '(max-width: 1280px)' });

    const numberOfMonths:number = isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 4;
    return(
        <>
            {domLoaded && (
                <DayPicker 
                    mode="multiple"
                    min={1}
                    selected={days}
                    numberOfMonths={numberOfMonths}
                    locale={pt}
                    pagedNavigation 
                    month={month} 
                    onMonthChange={setMonth}
                    fixedWeeks
                    onDayClick={SearchInformationPeriod}
                    modifiers={
                        splitArray(vacationPlan)
                    }
                    modifiersStyles={{ booked: bookedStyle, range_start: startStyle, range_end: endStyle, range_middle: middleStyle  }}
                />
            )}

            <BackTodayButton disabled={isSameMonth(today, month)} onClick={() => setMonth(today)}>
                Back to Today
            </BackTodayButton>
        </>
    )
}

const BackTodayButton = styled.button`
    background: transparent;
    text-align: center;
    width: 100%;
    &:hover {
        text-decoration: underline;
    }
`