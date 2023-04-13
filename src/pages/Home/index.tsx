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
          title="Popular"
          request={getPopularMovies()}
          onPress={openModalize}
        />
        <FlatListMovies
          title="Top rated"
          request={getTopRatedMovies()}
          onPress={openModalize}
        />
        <FlatListMovies
          title="Now playing"
          request={getNowPlayingMovies()}
          onPress={openModalize}
        />
        <FlatListMovies
          title="Upcoming"
          request={getUpcomingMovies()}
          onPress={openModalize}
        />
      </S.ContainerScreen>
    </>
  );
};
