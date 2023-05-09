import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export interface AppExtendedProps extends AppProps {
  session: any;
}

export default function App({
  Component,
  pageProps,
  session,
}: AppExtendedProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
