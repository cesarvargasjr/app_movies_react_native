import React, { useRef } from "react";
import { FlatListMovies } from "../../components/FlatListMovies";
import { ModalizeMovie } from "../../components/ModalizeMovie";
import { openModalize } from "../../utils/openModalize";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/movies";
import * as S from "./styles";

export const Home = () => {
  const modalizeRef: any = useRef(null);

  return (
    <>
      <ModalizeMovie modalizeRef={modalizeRef} />
      <S.ContainerScreen>
        <FlatListMovies
          title="Mais populares"
          request={getPopularMovies}
          onPress={() => openModalize(modalizeRef)}
        />
        <FlatListMovies
          title="Melhores avaliados"
          request={getTopRatedMovies}
          onPress={() => openModalize(modalizeRef)}
        />
        <FlatListMovies
          title="Todo mundo está assistindo"
          request={getNowPlayingMovies}
          onPress={() => openModalize(modalizeRef)}
        />
        <FlatListMovies
          title="Lançamentos"
          request={getUpcomingMovies}
          onPress={() => openModalize(modalizeRef)}
        />
      </S.ContainerScreen>
    </>
  );
};
