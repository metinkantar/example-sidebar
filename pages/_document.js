import NextDocument, { Html, Main, NextScript, Head } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="tr">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
