import { createContext, useContext, useState } from "react";

interface ContextProps {
  redraw: boolean;
  setRedraw: (_: boolean) => void;
}

export const RedrawContext = createContext({} as ContextProps);

function RedrawProvider({ children }: any) {
  const [redraw, setRedraw] = useState(false);

  return (
    <RedrawContext.Provider value={{ redraw, setRedraw }}>
      {children}
    </RedrawContext.Provider>
  );
}

const useRedraw = () => useContext(RedrawContext);

export { RedrawProvider, useRedraw };
