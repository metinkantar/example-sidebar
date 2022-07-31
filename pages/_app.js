import React, { useEffect } from "react";
import Script from "next/script";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap.bundle.min");
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Script src="/js/main.js"></Script>
    </>
  );
}

export default App;
