import "../styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../utils/gtag";

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
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
