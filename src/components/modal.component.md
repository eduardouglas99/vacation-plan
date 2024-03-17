# Documentation for the Modal Component

The `Modal` component is used to create or edit vacation plans. It includes a form with validation using Zod and is implemented using React Hook Form.

## Usage

1. Import the Header component into your project:

    ```javascript
    import Modal from '@/components/modal';

    export default MyComponent() {
        return (
            {/* Your other components */}
            <Modal />
        );
    };

### Functionality

- Displays a modal for creating or editing vacation plans.
- Validates input using Zod schemas.
- Handles form submission for creating and updating vacation plans.
- Implements responsive design for various screen sizes.
- Communicates with the Button component to toggle the modal visibility.

## Props

The Modal component does not accept any props.

## Styling

The styling for the Modal component is defined using styled-components. You can customize the styles as needed by modifying the styled components in your application.

## Events

The Modal component handles form submissions and toggling visibility. It is commonly used in conjunction with a button component to trigger the modal display.

## Form Structure

The Modal component includes the following form fields:

- Name(s) (MultiSelect): Select one or more employee names.
- Initial Period (Date Input): Enter the initial date of the vacation plan.
- End Period (Date Input): Enter the end date of the vacation plan.
- Title (Text Input): Enter a title for the vacation plan.
- Description (Text Input): Enter a description for the vacation plan.

## Form Validation

The form input values are validated using Zod schema validation. The validation includes:

- Checking if the initial date is before the end date.
- Ensuring that the title and description fields are not empty.

## Related Components

- MultiSelect: A multi-select component for selecting employee names.
- IoMdClose: Icon component for closing the modal.

## License

This component is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.