import React from "react";
import { InputSearch } from "./search";
import * as S from "./styles";

export interface InputProps {
  typeInput?: string;
  placeholder: string;
  value: string;
  onChangeText: (_: any) => void;
}

export const Input = ({
  typeInput,
  placeholder,
  onChangeText,
  value,
}: InputProps) => {
  function getInput() {
    switch (typeInput) {
      case "search":
        return (
          <InputSearch
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
          />
        );
    }
  }
  return <S.ContainerInput>{getInput()}</S.ContainerInput>;
};
