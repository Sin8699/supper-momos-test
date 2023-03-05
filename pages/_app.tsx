import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ getLayout: () => ReactNode }>) {
  // Use the layout defined at the page level, if available
  const getLayout = (Component as any)?.getLayout ?? ((page: ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
