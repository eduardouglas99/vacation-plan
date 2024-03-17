# Documentation for the Header Component

The `Header` component is used to display the header section of a webpage with the current year and a button.

## Usage

1. Import the Header component into your project:

   ```javascript
   import Header from '@/components/header/header';

    export default MyComponent() {
        return (
            {/* Your other components */}
            <Header />
        );
    };

The `Header` component includes the current year displayed using the CurrentYear styled component and a button using the Button component.

### Functionality

- Displays the current year dynamically.
- Includes a button that triggers a specific action when clicked.

## Props

The Header component does not accept any props.

## Styling

The styling for the Header component is defined using styled-components. You can customize the styles as needed by modifying the styled components in your application.

## Related Components

Button: A custom button component.

## License

This component is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.