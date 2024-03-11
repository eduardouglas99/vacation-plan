import React from 'react';
import { DayPicker } from 'react-day-picker';
import { pt } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

export default function Calendar() {
    const initialDays: Date[] = [];
    const [days, setDays] = React.useState<Date[] | undefined>(initialDays);

    const footer = days && days.length > 0 ? (
        <p>You selected {days.length} day(s).</p>
    ) : (
    <p>Please pick one or more days.</p>
    );
    
    return(
        <DayPicker 
            mode="multiple"
            min={1}
            selected={days}
            onSelect={setDays}
            footer={footer}
            numberOfMonths={4}
            locale={pt}
        />
    )
}