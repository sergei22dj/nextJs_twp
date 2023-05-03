import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
