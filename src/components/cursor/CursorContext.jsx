// cursorStateContext.js

import React, { createContext, useContext, useState } from "react";

const CursorStateContext = createContext();

export const useCursorState = () => useContext(CursorStateContext);

export const CursorStateProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CursorStateContext.Provider value={{ isHovered, handleMouseEnter, handleMouseLeave }}>
      {children}
    </CursorStateContext.Provider>
  );
};
