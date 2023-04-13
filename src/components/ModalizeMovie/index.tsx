import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Modalize } from "react-native-modalize";
import { useSelector } from "react-redux";
import { getMovie } from "../../services/movies";
import colors from "../../utils/colors";
import StarIcon from "../../assets/star.png";
import * as S from "./styles";

interface ModalizeProps {
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
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
    handleDataMovie();
  }, [movieIdState]);

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={700}
      modalStyle={{ backgroundColor: colors.dark }}
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
        <S.ContainerTitle>
          <S.Title>{dataMovie?.title}</S.Title>
          <S.ContainerRating>
            <S.Rating>{dataMovie?.vote_average.toFixed(1)}</S.Rating>
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
          {dataMovie?.genres?.map((item) => (
            <S.Genres>{item.name}</S.Genres>
          ))}
        </S.ConatinerGenres>
        <S.Overview>{dataMovie?.overview}</S.Overview>
      </S.ContainerContent>
    </Modalize>
  );
};
