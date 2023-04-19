import ReactGA from "react-ga";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const initGA = () => {
  ReactGA.initialize("G-7ZKT9GK320");
 
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category, action, label) => {
  if (label) {
    ReactGA.event({ category, action, label });

  } else {
    ReactGA.event({ category, action });
  }
};

export const withGoogleAnalytics = (Component) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
    
      }

      logPageView();

      router.events.on("routeChangeComplete", logPageView);
      return () => {
        router.events.off("routeChangeComplete", logPageView);
      };
    }, []);

    return <Component {...props} />;
  };
};