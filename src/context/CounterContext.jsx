import React, { createContext, useState } from "react";


export const ConterContextCreate = createContext();

export  function CounterProvider({ children }) {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  return (
    <ConterContextCreate.Provider value={{ count, increment }}>
      {children}
    </ConterContextCreate.Provider>
  );
}
