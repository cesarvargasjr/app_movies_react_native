import React, { useRef } from "react";
import { FlatListMovies } from "../../components/FlatListMovies";
import { ModalizeMovie } from "../../components/ModalizeMovie";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/movies";
import * as S from "./styles";
import { ScrollView } from "react-native";

export const Home = () => {
  const modalizeRef: any = useRef(null);

  const openModalize = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <ModalizeMovie modalizeRef={modalizeRef} />
      <S.ContainerScreen>
        <FlatListMovies
          title="Mais populares"
          request={getPopularMovies}
          onPress={openModalize}
        />
        <FlatListMovies
          title="Melhores avaliados"
          request={getTopRatedMovies}
          onPress={openModalize}
        />
        <FlatListMovies
          title="Todo mundo está assistindo"
          request={getNowPlayingMovies}
          onPress={openModalize}
        />
        <FlatListMovies
          title="Lançamentos"
          request={getUpcomingMovies}
          onPress={openModalize}
        />
      </S.ContainerScreen>
    </>
  );
};
