import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { StyleSheet } from "react-native";

export const ContainerFlatList = styled.View`
  margin-bottom: 30px;
`;

export const ContainerListEmpty = styled.View`
  height: 120px;
  justify-content: center;
  padding-left: 30%;
`;

export const TextEmpity = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.bold};
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-family: ${fonts.extraBold};
  color: ${colors.white};
  width: 100%;
  margin-bottom: 12px;
`;

export const Styles = StyleSheet.create({
  ActivityIndicator: {
    height: 100,
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
  },
});
