export type HolidaysPlanProps = {
    id: number,
    name: string,
    description: string,
    location: string,
    date: string
}

export type HolidaysServiceProps = {
    id: number,
    participant: string,
    title: string,
    description: string,
    location: string,
    initialPeriod: string,
    endPeriod: string,
}