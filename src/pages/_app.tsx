import "@/assets/styles/globals.css";
import { Header } from "@/components";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";

const NunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={NunitoSans.className}>
        <Header />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
