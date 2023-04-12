import React from "react";
import { Image } from "react-native";

export const CardMovies = ({ posterPath }: any) => {
  return (
    <>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w300/${posterPath}`,
        }}
        style={{
          resizeMode: "contain",
          height: 260,
          width: 170,
        }}
      />
    </>
  );
};
