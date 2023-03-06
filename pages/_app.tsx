import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

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
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
