import { CalendarProvider } from "@/common/context";
import { lightTheme, darkTheme } from "@/components/theme";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps}: AppProps) {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    return(
        <CalendarProvider>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <>
                    <GlobalStyles />
                    <Head>
                        <meta charSet="UTF-8" />
                        <title>Vacation Plans</title>
                        <meta name="description" content="Our solution provides a comprehensive way to manage employee vacations within the company. It includes a detailed calendar with all holidays marked, allowing employees and administrators to easily plan and track vacation days. The system provides essential information such as holiday titles, descriptions, locations, and date ranges, ensuring efficient management of employee time off. With this solution, companies can streamline the vacation planning process, minimize scheduling conflicts, and enhance overall productivity." />
                    </Head>
                    <Container>
                        <ButtonChangeMode className="accent" 
                            onClick={() => setIsDarkTheme(!isDarkTheme)}>{isDarkTheme ?
                                <span aria-label="Light mode" role="img">🌞</span> :
                                <span aria-label="Dark mode" role="img">🌜</span>
                            }
                        </ButtonChangeMode>
                        <Component {...pageProps} />
                    </Container>
                </>
            </ThemeProvider>
        </CalendarProvider>
    )
}

const GlobalStyles = createGlobalStyle`
    *, html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    html {
        background: ${({ theme }) => theme.body};
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    .flex {
        display: flex;
        align-items: center;
    }
    button {
        border: none;
        outline: none;
        cursor: pointer;
    }
    .rdp-months {
        justify-content: center;
    }
    .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
        background: none;
        color: red;
        font-weight: bold;
    }
    .rdp-cell,
    .rdp-head_cell,
    .rdp-caption_label,
    button.rdp-nav_button svg path{
        color: ${({ theme }) => theme.opposite};
    }

    .rdp-cell div.gridcell,
    button.rdp-nav_button svg path {
        background: ${({ theme }) => theme.opposite};
    }

    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
        background: ${({ theme }) => theme.hover};
    }
`

const Container = styled.main`
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 60px;
    @media only screen and (max-width: 580px) {
        padding: 30px;
    }
`;

const ButtonChangeMode = styled.button`
    position: relative;
    display: flex;
    justify-content: end;
    background: transparent;
    span {
        background: transparent;
        font-size: 20px;
    }
`