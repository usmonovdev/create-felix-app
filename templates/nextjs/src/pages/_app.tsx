import { IntlErrorCode, NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import "@/styles/variables.css";
import "@/styles/turncate-words.css";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <NextIntlClientProvider
        locale={router.locale}
        messages={pageProps.messages}
        timeZone="Asia/Tashkent"
        onError={(err) => {
          if (err.code === IntlErrorCode.MISSING_MESSAGE) {
            return;
          }
        }}
      >
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </Provider>
  );
}
