import { createContext, useState } from "react";

export const Context = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  return (
    <Context.Provider value={{ messages, setMessages }}>
      {children}
    </Context.Provider>
  );
};
