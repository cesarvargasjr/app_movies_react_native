import styled from "styled-components/native";
import fonts from "../../../utils/fonts";
import colors from "../../../utils/colors";

export const ContainerCard = styled.View`
  align-items: center;
  width: 50%;
`;

export const OriginalName = styled.Text`
  font-size: 18px;
  font-family: ${fonts.extraBold};
  color: ${colors.white};
  margin-top: 8px;
  width: 85%;
  text-align: center;
`;

export const Character = styled.Text`
 font-size: 16px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  margin-top: 3px;
  margin-bottom: 20px;
  width: 85%;
  text-align: center;
`;

export const ContainerIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200;
  width: 140;
  background-color: ${colors.darkSecondary};
`;