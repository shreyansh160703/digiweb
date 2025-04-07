import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("ScrollToTop triggered on:", pathname); 
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0; 
      document.body.scrollTop = 0; 
    }, 50); 
  }, [pathname]);

  return null;
};

export default ScrollToTop;
