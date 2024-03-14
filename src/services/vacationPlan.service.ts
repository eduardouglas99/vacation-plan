import { HolidaysServiceProps } from "@/interface/Holidays";

const VACATION_PLAN_API_URL = 'http://localhost:3003';

export async function fetchVacationPlan() {
    return await fetch(`${VACATION_PLAN_API_URL}/vacationPlan`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        })
}

export async function createVacationPlan(vacation: HolidaysServiceProps) {
    return await fetch(`${VACATION_PLAN_API_URL}/vacationPlan`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(vacation),
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error);
    })
}