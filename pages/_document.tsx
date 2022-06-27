import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html lang={'hu'}>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/vin_sans/VinSansPro-Medium.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/montserrat/static/Montserrat-Medium.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/playfair/PlayfairDisplay-Italic-VariableFont_wght.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
