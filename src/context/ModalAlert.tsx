import { createContext, useContext, useState } from "react";

interface ContextProps {
  showModal: boolean;
  setShowModal: (_: boolean) => void;
}

export const OpenModalContext = createContext({} as ContextProps);

function ModalAlertProvider({ children }: any) {
  const [showModal, setShowModal] = useState(false);

  return (
    <OpenModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </OpenModalContext.Provider>
  );
}

const useModalAlert = () => useContext(OpenModalContext);

export { ModalAlertProvider, useModalAlert };
