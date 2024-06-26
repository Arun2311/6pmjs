import React, { createContext, useState } from "react";

export const PhoneContext = createContext();

export function PhoneProvider({ children }) {
  const [phonenumber, setphonenumber] = useState("");

  const handlephone = (e) => {
    setphonenumber(e.target.value);
  };

  return (
    <PhoneContext.Provider value={{ phonenumber, handlephone ,}}>
      {children}
    </PhoneContext.Provider>
  );
}
