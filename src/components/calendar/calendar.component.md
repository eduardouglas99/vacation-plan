# Documentation for the Calendar Component

The `Calendar` component is used to display a date picker calendar with customizable styling and event handling.

## Usage

1. Import the Calendar component into your project:

   ```javascript
   import Calendar from '@/components/calendar/calendar';

    export default MyComponent() {
        return (
            {/* Your other components */}
            <Calendar />
        );
    };

The Calendar component includes a button to navigate back to the current month, a function to search for the first day, middle days, and end days of a vacation period, and responsive styling for the day picker.

### Functionality

- Displays error feedback messages when certain actions encounter problems.
- Handles the onDayClick event when a day on the calendar is clicked.
- Provides a button to navigate back to the current month.
- Includes functions to calculate the first day, middle days, and last days of a vacation period.
- Implements responsive design for the day picker component.

## Props

The Calendar component does not accept any props.

## Styling

The styling for the Calendar component is defined using styled-components. You can customize the styles as needed by modifying the styled components in your application.

## Events

The Calendar component handles the onDayClick event triggered when a day on the calendar is clicked.

## Related Components

- DayPicker: A third-party date picker component.
- pt: Locale object for Portuguese date formatting.

## License

This component is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.