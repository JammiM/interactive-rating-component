import { createContext, useState } from "react";

export const SharedContext = createContext();

export function SharedProvider({ children }) {
  const [sharedValue, setSharedValue] = useState("");

  return (
    <SharedContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </SharedContext.Provider>
  );
}
