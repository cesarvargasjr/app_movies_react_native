import React, { useEffect, useState } from "react";
import { Alert, Image, Share } from "react-native";
import { Modalize } from "react-native-modalize";
import { useSelector } from "react-redux";
import { getMovie } from "../../services/movies";
import { ActivityIndicator } from "react-native";
import { lazyLoad } from "../../utils/lazyLoad";
import { useRedraw } from "../../context/Redraw";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import StarIcon from "../../assets/star.png";
import colors from "../../utils/colors";
import * as S from "./styles";

interface ModalizeProps {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  runtime: number;
  release_date: string;
  budget: number;
  homepage: any;
  genres: [
    {
      name: string;
    }
  ];
}

export const ModalizeMovie = ({ modalizeRef }: any) => {
  const movieIdState = useSelector((state: any) => state?.movieIdState);
  const { redraw, setRedraw } = useRedraw();
  const [data, setData] = useState([]);
  const [dataMovie, setDataMovie] = useState<ModalizeProps>();
  const [loading, setLoading] = useState(false);

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  const handleDataMovie = async () => {
    setLoading(true);
    const response = await getMovie(movieIdState?.newId);
    setDataMovie(response);
    await lazyLoad(250);
    setLoading(false);
  };

  const handleFavoriteMovie = async (movie: any) => {
    try {
      const storedValue = await AsyncStorage.getItem("favoriteMovies");
      if (storedValue) {
        const favoriteMovies = JSON.parse(storedValue);
        const movieIndex = favoriteMovies.findIndex(
          (item: { id: number }) => item.id === movie.id
        );
        if (movieIndex === -1) {
          favoriteMovies.push(movie);
        } else {
          favoriteMovies.splice(movieIndex, 1);
        }
        await AsyncStorage.setItem(
          "favoriteMovies",
          JSON.stringify(favoriteMovies)
        );
      } else {
        const favoriteMovies = [movie];
        await AsyncStorage.setItem(
          "favoriteMovies",
          JSON.stringify(favoriteMovies)
        );
      }
    } catch (e) {
      console.log("Failed to toggle favorite movie:", e);
    }
    closeModalize();
    if (!redraw) {
      setRedraw(true);
    } else {
      setRedraw(false);
    }
  };

  const handleStorage = async () => {
    const dataStorge = await AsyncStorage.getItem("favoriteMovies");
    const dataIds = dataStorge != null ? JSON.parse(dataStorge) : [];
    setData(dataIds.map((item: any) => item.id));
  };

  const RenderIconHeart = () => {
    const filteredArray = data?.filter(
      (obj: any) => obj === movieIdState?.newId
    );

    if (movieIdState?.newId === filteredArray[0]) {
      return (
        <S.IconHeart onPress={() => handleFavoriteMovie(dataMovie)}>
          <Ionicons name="ios-heart-sharp" size={35} color={colors.red} />
        </S.IconHeart>
      );
    } else {
      return (
        <S.IconHeart onPress={() => handleFavoriteMovie(dataMovie)}>
          <Ionicons name="ios-heart-sharp" size={35} color={colors.white} />
        </S.IconHeart>
      );
    }
  };

  const shareMovie = async () => {
    let homepage = dataMovie?.homepage;
    let overview = dataMovie?.overview;

    if (homepage !== "" || overview !== "") {
      await Share.share({
        message: overview,
        url: homepage,
      });
    } else {
      Alert.alert(
        "Atenção!",
        "Não é possível compartilhar conteúdo deste filme."
      );
    }
  };

  useEffect(() => {
    if (movieIdState?.newId !== 0) {
      handleDataMovie();
    }
    handleStorage();
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
        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors.greyLight}
            style={S.Styles.ActivityIndicator}
          />
        ) : (
          <>
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
            <RenderIconHeart />
            <S.IconShare onPress={shareMovie}>
              <Ionicons name="share-social" size={35} color={colors.white} />
            </S.IconShare>
            <S.ContainerTitle>
              <S.Title>{dataMovie?.title}</S.Title>
              <S.ContainerRating>
                <S.TextRating>
                  {dataMovie?.vote_average.toFixed(1)}
                </S.TextRating>
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
          </>
        )}
      </S.ContainerContent>
    </Modalize>
  );
};
