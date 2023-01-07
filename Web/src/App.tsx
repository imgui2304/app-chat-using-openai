import { useState } from "react";
import CRoutes from "./components/Routes";
import { GlobalStyle } from "./global/style";

function App() {
  return (
    <>
      <GlobalStyle />
      <CRoutes />
    </>
  );
}

export default App;
