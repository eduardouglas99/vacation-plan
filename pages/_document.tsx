import Document, { Html, Head, Main, NextScript } from 'next/document';

class myDocument extends Document {
    render() {
        return(
            <Html lang='en'>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content="Our solution provides a comprehensive way to manage employee vacations within the company. It includes a detailed calendar with all holidays marked, allowing employees and administrators to easily plan and track vacation days. The system provides essential information such as holiday titles, descriptions, locations, and date ranges, ensuring efficient management of employee time off. With this solution, companies can streamline the vacation planning process, minimize scheduling conflicts, and enhance overall productivity." />

                    <title>Vacation Plans</title>

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default myDocument;