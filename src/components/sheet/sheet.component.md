# Documentation for the Sheet Component

The `Sheet` component is responsible for rendering national holidays and registered vacation plans. It is triggered when a click event occurs on the calendar, and based on the selected day, it displays the relevant information. The component only opens for days that have vacation plans or holidays.

## Usage

1. Import the Header component into your project:

   ```javascript
   import Sheet from '@/components/sheet/sheet';

    export default MyComponent() {
        return (
            {/* Your other components */}
            <Sheet />
        );
    };

The `Sheet` component is integrated into your existing React application. It is invoked when a click event occurs on the calendar.

### Functionality

- Displays information about national holidays and registered vacation plans.
- Opens only for days that have vacation plans or holidays.
- Allows users to edit or delete registered vacation plans.
- Communicates with the CalendarContext to fetch and manage holiday data.

## Props

The `Sheet` component does not accept any props directly. However, it relies on the `CalendarContext` context to access holiday data, vacation plans, and methods for creating, editing, and deleting plans.

## Styling

The styling for the Sheet component is defined using styled-components. You can customize the styles as needed by modifying the styled components in your application.

## Related Components

- IoMdClose: An icon component used for the close button in the modal.
- Image:  Images from Next.js used for displaying different types of information icons.

## License

This component is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.