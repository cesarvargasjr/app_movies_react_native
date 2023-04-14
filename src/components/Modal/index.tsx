import React from "react";
import { Modal } from "react-native";
import { clearStorage } from "../../utils/clearStorage";
import { useModalAlert } from "../../context/ModalAlert";
import { useRedraw } from "../../context/Redraw";
import { Button } from "../Button";
import * as S from "./styles";

interface ModalProps {
  text: string;
}

export const ModalAlert = ({ text }: ModalProps) => {
  const { setShowModal } = useModalAlert();
  const { redraw, setRedraw } = useRedraw();

  const handleRedraw = () => {
    if (!redraw) {
      setRedraw(true);
    } else {
      setRedraw(false);
    }
  };

  return (
    <Modal transparent={true}>
      <S.ContainerScreen>
        <S.Background onTouchEnd={() => setShowModal(false)} />
        <S.ContainerModal>
          <S.Text>{text}</S.Text>
          <Button
            typeButton="primary"
            text="Sim"
            onPress={() => (
              clearStorage(), setShowModal(false), handleRedraw()
            )}
          />
          <Button
            typeButton="cancel"
            text="Cancelar"
            onPress={() => setShowModal(false)}
          />
        </S.ContainerModal>
      </S.ContainerScreen>
    </Modal>
  );
};
