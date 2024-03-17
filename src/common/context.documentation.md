# Documentation for the Calendar Context

The Calendar Context plays a pivotal role in our application, providing centralized state management and essential functionality for managing holidays, vacation plans, employees, and error handling. It serves as the backbone that nurtures the entire application, handling events, actions, and data storage.

### Purpose and Importance

The Calendar Context is crucial for maintaining a coherent and efficient workflow within the application. It ensures consistency in data handling, facilitates seamless interaction between components, and enables robust error handling mechanisms.

### Usage Example

1. Import the Context component into your project:
    ```jsx
    import { useContext } from 'react';
    import CalendarContext from './CalendarContext';

    const MyComponent = () => {
    const {
        createPlan,
        deletePlan,
        updatePlan,
        genericFilterPeriod,
        // Other context values
    } = useContext(CalendarContext);

    // Use context functions here
    };

### State Management

The context manages various states that are essential for the application's functionality:

#### isModalOpen
- Type: `boolean`
- Description: Indicates whether the modal is open or closed.

#### setIsModalOpen
- Type: `React.Dispatch<SetStateAction<boolean>>`
- Description: Setter function for toggling the modal.

#### ModalCalendarToogle
- Type: `() => void`
- Description: Toggles the modal open or closed.

#### isSheetOpen
- Type: `boolean`
- Description: Indicates whether the sheet is open or closed.

#### setIsSheetOpen
- Type: `React.Dispatch<SetStateAction<boolean>>`
- Description: Setter function for toggling the sheet.

#### SheetCalendarToogle
- Type: `() => void`
- Description: Toggles the sheet open or closed.

#### editData
- Type: `HolidaysServiceProps | null`
- Description: Holds the data for editing a vacation plan.

#### setEditData
- Type: `React.Dispatch<SetStateAction<HolidaysServiceProps | null>>`
- Description: Setter function for editing vacation plan data.

#### holidayPDF
- Type: `HolidaysServiceProps | null`
- Description: Holds the data for generating a PDF of a vacation plan.

#### setHolidayPdf
- Type: `React.Dispatch<SetStateAction<HolidaysServiceProps | null>>`
- Description: Setter function for setting holiday PDF data.

#### errorServerRequest
- Type: `boolean`
- Description: Indicates whether there was an error during a server request.

#### setErrorServerRequest
- Type: `React.Dispatch<SetStateAction<boolean>>`
- Description: Setter function for handling server request errors.

#### isFeedbackError
- Type: `boolean`
- Description: Indicates whether a feedback error is displayed.

#### setFeedbackError
- Type: `React.Dispatch<SetStateAction<boolean>>`
- Description: Setter function for toggling feedback error display.

#### feedbackErrorToogle
- Parameters: `erroRequest?: boolean`
- Type: `() => void`
- Description: Toggles the feedback error message based on the server request status.

### Functionality

The Calendar Context provides a wide range of functionalities to support different aspects of the application:

#### createPlan
- Parameters: `vacation: HolidaysServiceProps`
- Description: Creates a new vacation plan and generates a PDF.

#### deletePlan
- Parameters: `vacation: HolidaysServiceProps`
- Description: Deletes an existing vacation plan.

#### updatePlan
- Parameters: `vacation: HolidaysServiceProps`
- Description: Updates an existing vacation plan.

#### genericFilterPeriod
- Parameters: `initialPeriod: string, endPeriod: string`
- Type: `() => HolidaysServiceProps[]`
- Description: Filters vacation plans based on the specified date range.

### Data Management

In addition to state management, the context also handles data storage and retrieval:

#### holidayData
- Type: `HolidaysPlanProps | undefined`
- Description: Holds data related to holidays.

#### setHolidayData
- Type: `React.Dispatch<SetStateAction<HolidaysPlanProps | undefined>>`
- Description: Setter function for holiday data.

#### holidayRegister
- Type: `HolidaysServiceProps | undefined`
- Description: Holds the data for registering a new vacation plan.

#### setHolidayRegister
- Type: `React.Dispatch<SetStateAction<HolidaysServiceProps | undefined>>`
- Description: Setter function for holiday registration data.

#### holidays
- Type: `HolidaysPlanProps[]`
- Description: Holds data related to planned holidays.

#### setHolidays
- Type: `React.Dispatch<SetStateAction<HolidaysPlanProps[]>>`
- Description: Setter function for holidays data.

#### vacationPlan
- Type: `HolidaysServiceProps[]`
- Description: Holds data related to vacation plans.

#### setVacationPlan
- Type: `React.Dispatch<SetStateAction<HolidaysServiceProps[]>>`
- Description: Setter function for vacation plans data.

#### employees
- Type: `EmployeesProps[]`
- Description: Holds data related to employees.

#### setEmployees
- Type: `React.Dispatch<SetStateAction<EmployeesProps[]>>`
- Description: Setter function for employees data.

### Event Handling

The context manages event handling and response mechanisms:

#### ModalCalendarToogle
- Type: `() => void`
- Description: Toggles the modal open or closed.

#### SheetCalendarToogle
- Type: `() => void`
- Description: Toggles the sheet open or closed.

#### feedbackErrorToogle
- Parameters: `erroRequest?: boolean`
- Type: `() => void`
- Description: Toggles the feedback error message based on the server request status

## Related Components

- Header
- Calendar
- Modal
- Sheet
- FeedbackError

The Calendar Context is the heart of our application, providing a robust foundation for managing data, handling events, and ensuring a seamless user experience across all components.

## License

This component is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.