import React from "react";
import { Image } from "react-native";

export const CardMovies = ({ movie }: any) => {
  return (
    <>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w300/${movie?.item?.poster_path}`,
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
