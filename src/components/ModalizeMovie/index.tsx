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
