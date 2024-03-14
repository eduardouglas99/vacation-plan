const EMPLOYEES_API_URL = 'http://localhost:3003/employees';

export async function fetchEmployees() {
    return await fetch(EMPLOYEES_API_URL)
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