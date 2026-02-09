import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Home />
    </>
  );
};

export default App;
