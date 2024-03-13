import { CalendarProvider } from "@/common/context";
import { AppProps } from "next/app";
import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps}: AppProps) {
    return(
            <CalendarProvider>
                <GlobalStyles />
                <Container>
                    <Head>
                        <meta charSet="UTF-8" />
                        <title>Vacation Plans</title>
                        <meta name="description" content="Our solution provides a comprehensive way to manage employee vacations within the company. It includes a detailed calendar with all holidays marked, allowing employees and administrators to easily plan and track vacation days. The system provides essential information such as holiday titles, descriptions, locations, and date ranges, ensuring efficient management of employee time off. With this solution, companies can streamline the vacation planning process, minimize scheduling conflicts, and enhance overall productivity." />
                    </Head>
                    <Component {...pageProps} />
                </Container>
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
`

const Container = styled.main`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 60px;
    @media only screen and (max-width: 580px) {
        padding: 30px;
    }
`;