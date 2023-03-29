import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trixie Footwear</title>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/lshkgi0dm/trixie_logo_1.svg?updatedAt=1680078171106"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
