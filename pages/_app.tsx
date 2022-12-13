import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TRIXIE FOOTWEAR</title>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/lshkgi0dm/trixie/logo/Artboard_1_1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670941330347"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
