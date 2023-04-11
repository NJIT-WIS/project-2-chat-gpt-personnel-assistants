import "../styles/index.css";
import { withGoogleAnalytics } from "../lib/gtm";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withGoogleAnalytics(MyApp);
