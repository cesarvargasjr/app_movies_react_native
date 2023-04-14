import React from "react";
import * as S from "./styles";

interface ButtonProps {
  onPress: () => void;
  text: string;
  typeButton: string;
}

export const Button = ({ onPress, text, typeButton }: ButtonProps) => {
  function getButton() {
    switch (typeButton) {
      case "primary":
        return (
          <S.Button onPress={onPress}>
            <S.TextButton typeButton="primary">{text}</S.TextButton>
          </S.Button>
        );
      case "cancel":
        return (
          <S.ButtonCancel onPress={onPress}>
            <S.TextButton typeButton="cancel">{text}</S.TextButton>
          </S.ButtonCancel>
        );
    }
  }

  return <>{getButton()}</>;
};
