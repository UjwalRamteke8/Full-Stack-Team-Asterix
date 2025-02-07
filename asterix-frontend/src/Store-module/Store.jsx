import React, { createContext, useState } from "react";

// Create a Context
const StoreContext = createContext();

// Create a Provider Component
const StoreProvider = ({ children }) => {
  // Define the state or values to be shared across components
  const [state, setState] = useState({
    exampleKey: "exampleValue",
  });

  // Provide the state and a function to update it
  const value = {
    state,
    setState,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
