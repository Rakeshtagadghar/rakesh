import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
           <title>Hola</title>
          <meta name="description" content="PWA app" />
          <meta name="author" content="rakesh" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="/icons/apple-icon-180x180.png" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <body id="top">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
