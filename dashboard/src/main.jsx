import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create the Context
export const Context = createContext();

const MainProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({ name: "Admin User" });

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, admin, setAdmin }}>
      {children}
    </Context.Provider>
  );
};

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
