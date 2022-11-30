import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";

function MyApp({ Component, pageProps }) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  );
}

export default MyApp;
