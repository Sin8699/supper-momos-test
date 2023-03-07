import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function MyApp({
  Component,
  pageProps,
}: AppProps<{ getLayout: () => ReactNode }>) {
  // Use the layout defined at the page level, if available
  const getLayout =
    (Component as any)?.getLayout ?? ((page: ReactElement) => page);

  return getLayout(
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
