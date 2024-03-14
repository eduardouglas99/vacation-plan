const HOLIDAY_API_URL = 'http://localhost:3003/holidays';

export async function fetchHolidays() {
    return await fetch(HOLIDAY_API_URL)
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