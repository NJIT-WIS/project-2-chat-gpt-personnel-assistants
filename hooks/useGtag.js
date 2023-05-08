import { useEffect } from 'react';

const useGtag = () => {
  useEffect(() => {
    if (!window.gtag) {
      console.warn('gtag is not defined. Make sure the gtag script is included in your HTML.');
      return;
    }
  }, []);

  return (event, params) => {
    if (window.gtag) {
      window.gtag('event', event, params);
      console.log("we logging custom events")
    }
  };
};

export default useGtag;
