import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { useSelector } from "react-redux";
import { getMovie } from "../../services/movies";
import Ionicons from "@expo/vector-icons/Ionicons";
import StarIcon from "../../assets/star.png";
import colors from "../../utils/colors";
import * as S from "./styles";
import { StyleSheet } from "react-native";

interface ModalizeProps {
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  runtime: number;
  release_date: string;
  budget: number;
  genres: [
    {
      name: string;
    }
  ];
}

export const ModalizeMovie = ({ modalizeRef }: any) => {
  const movieIdState = useSelector((state: any) => state?.movieIdState);
  const [dataMovie, setDataMovie] = useState<ModalizeProps>();

  const handleDataMovie = async () => {
    const response = await getMovie(movieIdState?.newId);
    setDataMovie(response);
  };

  useEffect(() => {
    if (movieIdState?.newId !== 0) {
      handleDataMovie();
    }
  }, [movieIdState]);

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={700}
      modalStyle={{
        backgroundColor: colors.dark,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
    >
      <S.ContainerContent>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w300/${dataMovie?.poster_path}`,
          }}
          style={{
            resizeMode: "contain",
            height: 300,
            width: 200,
          }}
        />
        <S.IconHeart onPress={() => console.log("teste")}>
          <Ionicons name="ios-heart-sharp" size={35} color={colors.white} />
        </S.IconHeart>
        <S.IconShare onPress={() => console.log("teste")}>
          <Ionicons name="share-social" size={35} color={colors.white} />
        </S.IconShare>
        <S.ContainerTitle>
          <S.Title>{dataMovie?.title}</S.Title>
          <S.ContainerRating>
            <S.TextRating>{dataMovie?.vote_average.toFixed(1)}</S.TextRating>
            <Image
              source={StarIcon}
              style={{
                marginTop: 3,
                height: 20,
                width: 20,
              }}
            />
          </S.ContainerRating>
        </S.ContainerTitle>
        <S.ConatinerGenres>
          {dataMovie?.genres?.map((item, i) => (
            <S.Genres key={i}>{item.name}</S.Genres>
          ))}
        </S.ConatinerGenres>
        <S.TextOverview>{dataMovie?.overview}</S.TextOverview>
        <S.ConatinerLine>
          <S.Box>
            <S.Subtitle>Duration</S.Subtitle>
            <S.Text>{dataMovie?.runtime}min</S.Text>
          </S.Box>
          <S.Box>
            <S.Subtitle>Release date</S.Subtitle>
            <S.Text>{dataMovie?.release_date}</S.Text>
          </S.Box>
          <S.Box>
            <S.Subtitle>Budget</S.Subtitle>
            <S.Text>${dataMovie?.budget.toLocaleString("en-EN")}</S.Text>
          </S.Box>
        </S.ConatinerLine>
      </S.ContainerContent>
    </Modalize>
  );
};

export default StyleSheet.create({
  modalize: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9998,
  },

  modalize__wrapper: {
    flex: 1,
  },

  modalize__content: {
    zIndex: 5,

    marginTop: "auto",

    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 12,

    elevation: 4,
  },
});
