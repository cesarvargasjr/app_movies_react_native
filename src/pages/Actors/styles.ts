import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const ContainerScreen = styled.View`
  background-color: ${colors.dark};
  height: 100%;
  padding: 4%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 21px;
  font-family: ${fonts.bold};
  color: ${colors.white};
  margin-top: 30%;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-family: ${fonts.extraBold};
  color: ${colors.white};
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
`;