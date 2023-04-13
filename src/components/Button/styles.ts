import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  width: 200px;
  height: 40px;
  margin-top: 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonCancel = styled.TouchableOpacity`
  background-color: ${colors.white};
  border: 1px solid ${colors.red};
  width: 200px;
  height: 40px;
  margin-top: 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text<{ typeButton: string }>`
  font-size: 18px;
  font-family: ${fonts.bold};
  color: ${({ typeButton }) =>
    typeButton === "cancel" ?
      colors.red : colors.white};
`;