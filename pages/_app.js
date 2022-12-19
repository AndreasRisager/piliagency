import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-1F7VKKSHPM"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1F7VKKSHPM', {
          page_path: window.location.pathname,
        }); `,
        }}
      />
      <SizeObserver>
        <ScrollObserver>
          <Component {...pageProps} />
        </ScrollObserver>
      </SizeObserver>
    </>
  );
}

export default MyApp;
