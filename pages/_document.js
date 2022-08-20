import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="../node_modules/flowbite/dist/flowbite.js"></script>
                </body>
            </Html>
        )
    }
}
