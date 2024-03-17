## Documentation for Theme Switching

The theme switching functionality allows users to toggle between light and dark themes in the application. The themes include color schemes as well as styles for light and dark modes.

## Usage

1. Import the theme objects into your project:

   ```javascript
   import { lightTheme, darkTheme } from './theme';

   const [isDarkMode, setIsDarkMode] = useState(false);

   const handleThemeToggle = () => {
      setIsDarkMode(!isDarkMode);
   };

   return (
      <div>
         {/* Your other components */}
         <button onClick={handleThemeToggle}>Toggle Theme</button>
         <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
               {/* Your application components */}
         </ThemeProvider>
      </div>
   );

### Functionality

- Provides color palettes for light and dark themes used throughout the application.
- Defines color values for elements such as hover effects, text color, and background color.
- Allows users to switch between light and dark themes to customize the visual appearance of the application.

## Theme Objects

Light Theme

The `lightTheme` object provides styles for the light theme

Dark Theme

The `darkTheme` object provides styles for the dark theme

## Related Components

- ThemeProvider: A component from styled-components used to provide the selected theme to the application.
- Button: A button component used for toggling the theme.

## License

This component is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.