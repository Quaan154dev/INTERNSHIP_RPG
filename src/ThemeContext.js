import React, { createContext, useContext, useEffect, useState } from "react";
import { logoSumCanvas, logoSpringCanvas, logoFallCanvas } from "./assets";

const ThemeContext = createContext({
  season: "spring",
  logo: { logoSumCanvas },
  setSeason: () => { },
  setLogo: () => { },
});
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [season, setSeason] = useState("spring");
  const [logo, setLogo] = useState({ logoSumCanvas })
  useEffect(() => {
    if (season === "spring") {
      setLogo({ logoSumCanvas })
    } else if (season === "summer") {
      setLogo({ logoSpringCanvas })
    } else if (season === "fall") {
      setLogo({ logoFallCanvas })
    } else if (season === "winter") {
      setLogo({ logoSumCanvas })
    }
  }, [season])
  return (
    <ThemeContext.Provider value={{ season, setSeason, logo, setLogo }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
