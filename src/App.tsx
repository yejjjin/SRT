import React from "react";
import Routers from "./Routers";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/Theme";
import { globalStyles } from "./theme/globalStyles";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    {globalStyles}
    <Routers />
  </ThemeProvider>
);

export default App;
