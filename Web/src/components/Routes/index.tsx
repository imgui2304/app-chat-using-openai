import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Interface from "../../pages/Interface";
import { ThemeProvider } from "styled-components";
import light from "../themes/light";
import dark from "../themes/dark";
import usePersistentState from "../../utils/usePersistedState";
const CRoutes: React.FC = () => {
  const [theme, setTheme] = usePersistentState('theme', light);
  console.log(theme);
  
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Interface toggleTheme={toggleTheme} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default CRoutes;
