import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { StyleSheet } from "react-native";

export const ContainerScreen = styled.View`
  background-color: ${colors.dark};
  height: 100%;
  padding: 4%;
  align-items: center;
`;

export const ContainerFlatList = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const TextEmpity = styled.Text`
  font-size: 21px;
  color: ${colors.white};
  font-family: ${fonts.bold};
  text-align: center;
  margin-top: 40%;
`;

export const Styles = StyleSheet.create({
  ActivityIndicator: {
    top: '40%'
  },
});
