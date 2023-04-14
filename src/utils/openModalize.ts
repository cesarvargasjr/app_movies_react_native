export const openModalize = (modalizeRef: { current: { open: () => void; }; }) => {
  modalizeRef.current?.open();
};
