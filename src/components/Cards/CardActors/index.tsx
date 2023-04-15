import React from "react";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../../utils/colors";
import * as S from "./styles";

export const CardActor = ({ actor }: any) => {
  const { profile_path, original_name, character } = actor?.item;

  const RenderImage = () => {
    if (profile_path) {
      return (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w300/${profile_path}`,
          }}
          style={{
            height: 200,
            width: 140,
          }}
        />
      );
    } else {
      return (
        <S.ContainerIcon>
          <Ionicons name="person-outline" size={120} color={colors.white} />
        </S.ContainerIcon>
      );
    }
  };

  return (
    <S.ContainerCard>
      <RenderImage />
      <S.OriginalName>{original_name}</S.OriginalName>
      <S.Character>{character}</S.Character>
    </S.ContainerCard>
  );
};
