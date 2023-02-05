import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import Head from "next/head";
import { LiffProvider } from "@/context/LiffProvider";

function MyApp({ Component, pageProps }: AppProps) {
  // const { liffObject, liffError } = useLiff();

  // Provide `liff` object and `liffError` object
  // to page component as property
  // pageProps.liff = liffObject;
  // pageProps.liffError = liffError;
  return (
    <>
      <Head>
        <title>Cozee</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssBaseline />
      <LiffProvider>
        <Component {...pageProps} />
      </LiffProvider>
    </>
  )
}

export default MyApp;
