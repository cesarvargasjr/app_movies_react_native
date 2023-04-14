import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const ContainerScreen = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.View`
  background-color:  #0000007D;
  height: 100%;
  width: 100%;
`;

export const ContainerModal = styled.View`
  position: absolute;
  border-radius: 8px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  padding: 10% 6%;
  width: 75%;
`;

export const Text = styled.Text`
  font-size: 21px;
  font-family: ${fonts.bold};
  color: ${colors.dark};
  max-width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;