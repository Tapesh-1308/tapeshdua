import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { LogoLoader } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  const [logoLoader, setLogoLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogoLoader(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);


  
  return (
    <AnimatePresence mode="wait">
      {logoLoader ? (
        <LogoLoader />
      ) : (
        
          <Home />
        
      )}
    </AnimatePresence>
  );
}

export default App;
