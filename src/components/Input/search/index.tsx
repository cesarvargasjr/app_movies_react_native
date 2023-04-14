import React from "react";
import { InputProps } from "..";
import { TextInput } from "react-native";

export const InputSearch = ({ value, onChangeText }: InputProps) => {
  return (
    <TextInput
      placeholder="Digite aqui para pesquisar"
      value={value}
      onChangeText={onChangeText}
    />
  );
};
