export type HolidaysPlanProps = {
    id: number,
    name: string,
    description: string,
    location: string,
    date: string
}

export type HolidaysServiceProps = {
    id: number,
    names: {label: string, value: string}[],
    title: string,
    description: string,
    location: string,
    initialPeriod: string,
    endPeriod: string,
}

export type EmployeesProps = {
    id: number,
    label: string, 
    value: string,
    jobTitle: string
}

export type ResponseDataProps = {
    responseHolidays: HolidaysPlanProps[],
    responseVacationPlan: HolidaysServiceProps[],
    responseEmployees: EmployeesProps[]
}