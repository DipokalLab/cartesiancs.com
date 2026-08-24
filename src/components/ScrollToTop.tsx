import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the scroll position across navigations, so every page
// change starts wherever the previous page was left. App.css puts
// overflow-x: hidden on <body>, which makes <body> a scroll container of its
// own, so resetting the window alone is not always enough.
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default ScrollToTop;
