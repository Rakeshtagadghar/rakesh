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
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="theme-color" content="#ffffff" />
          {/* <script src="/js/modernizr.js"></script>
          <script src="/js/pace.min.js"></script> */}
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <body id="top">
          <Main />
          <NextScript />
          {/* <script src="/js/jquery-3.4.1.min.js"></script>
          <script src="/js/plugins.js"></script>
          <script src="/js/main.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
