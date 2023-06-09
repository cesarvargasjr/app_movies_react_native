import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const ContainerScreen = styled.View`
  background-color: ${colors.dark};
  height: 100%;
  padding: 4%;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 21px;
  font-family: ${fonts.bold};
  color: ${colors.white};
  text-align: center;
  max-width: 60%;
  margin-top: 20%;
`;