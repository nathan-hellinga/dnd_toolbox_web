import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider
} from "@mui/material";
import Head from "next/head";
import { Provider } from "react-redux";

import theme from "../themes";
import { store } from "@/redux/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function App({ Component, pageProps }) {
  const EmptyLayout = ({ children }) => <>{children}</>;
  const Layout = Component.getLayout || EmptyLayout;
  return (
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
            <link rel="shortcut icon" href="/favicon.png" />
            <meta name="theme-color" content="#f4ba7d" />

            {/*SOCIAL MEDIA SHARE*/}
            <meta property="og:image" content="/page_preview_banner.png" />
            <meta
              name="description"
              content="Effortlessly craft your DnD adventure. Our intuitive tools generate random encounters and magic items. Dive in for a seamless Dungeons & Dragons experience."
            />
            <meta
              name="title"
              content="DND Toolbox: Your Go-To for Instant DnD Encounters & Magic Items"
            />

            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-811JN6RCFY"
            ></script>
            <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6278900996400061"
                    crossOrigin="anonymous"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-811JN6RCFY');
        `
              }}
            />
          </Head>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  );
}
