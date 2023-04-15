import styled from "styled-components/native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { StyleSheet } from "react-native";

export const ContainerScreen = styled.ScrollView`
  height: 100%;
  background-color: ${colors.dark};
`;

export const ContainerContent = styled.View`
  align-items: center;
  min-height: 100%;
  background-color: ${colors.dark};
  padding: 4%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  justify-content: space-between;
`;

export const ContainerRating = styled.View`
  flex-direction: row;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 21px;
  font-family: ${fonts.extraBold};
  color: ${colors.white};
  height: 100%;
  max-width: 80%;
`;

export const TextRating = styled.Text`
  font-size: 21px;
  font-family: ${fonts.extraBold};
  color: ${colors.white};
  margin-right: 5px;
`;

export const TextOverview = styled.Text`
  font-size: 16px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  width: 100%;
  text-align: justify;
  margin-top: 25px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: ${fonts.regular};
  color: ${colors.white};
`;

export const Box = styled.View`
`;

export const Genres = styled.Text`
  padding: 3px 4px;
  font-size: 14px;
  border-radius: 4px;
  color: ${colors.green};
  font-family: ${fonts.bold};
  border: 1px solid ${colors.green};
  margin-right: 10px;
`;

export const ConatinerGenres = styled.View`
  flex-direction: row;
  margin-top: 25px;
  width: 100%;
`;

export const ConatinerLine = styled.View`
  flex-direction: row;
  margin-top: 25px;
  width: 100%;
  justify-content: space-between;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.bold};
`;

export const IconHeart = styled.TouchableOpacity`
  position: absolute;
  right: 35;
  top: 30;
`;

export const IconShare = styled.TouchableOpacity`
  position: absolute;
  right: 35;
  top: 90;
`;

export const ShowMoreActors = styled.TouchableOpacity`
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 4px 20px;
  border-radius: 50px;
  background-color: ${colors.orange};
`;

export const TextMoreActor = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.extraBold};
`;

export const Styles = StyleSheet.create({
  ActivityIndicator: {
    marginTop: 300
  },
});
