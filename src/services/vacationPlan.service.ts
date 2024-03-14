const VACATION_PLAN_API_URL = 'http://localhost:3003/vacationPlan';

export async function fetchVacationPlan() {
    return await fetch(VACATION_PLAN_API_URL)
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