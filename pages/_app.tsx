import { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps}: AppProps) {
    return(
            <>
                <GlobalStyles />
                <Container>
                    <Component {...pageProps} />
                </Container>
            </>
    )
}

const GlobalStyles = createGlobalStyle`
    *, html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
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

`

const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 60px;
`;