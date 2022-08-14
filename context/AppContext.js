import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menuValue, setMenuValue] = useState("pizza");
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const value = {
    menuValue,
    setMenuValue,
    hamburgerActive,
    setHamburgerActive,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
