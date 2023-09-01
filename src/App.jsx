import { useState } from "react";
import Router from "./routes/Router";
import { ContextProvider } from "./context/appContext";

const App = () => {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  );
};

export default App;
