import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" style={{ margin: 0, height: '100%' }}>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body style={{ margin: 0, height: '100%' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
