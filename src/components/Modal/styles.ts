import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const ContainerScreen = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const ContainerModal = styled.View`
  display: flex;
  border-radius: 8px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  max-width: 80%;
  padding: 5%;
`;

export const Background = styled.View`
    height: 100%;
    width: 100%;
    background-color: #0000007D;
`;

export const Text = styled.Text`
  font-size: 21px;
  font-family: ${fonts.bold};
  color: ${colors.dark};
  max-width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;