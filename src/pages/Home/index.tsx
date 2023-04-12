import React from "react";
import { FlatListMovies } from "../../components/FlatListMovies";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/movies";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.ContainerScreen>
      <FlatListMovies title="Popular" request={getPopularMovies()} />
      <FlatListMovies title="Top rated" request={getTopRatedMovies()} />
      <FlatListMovies title="Now playing" request={getNowPlayingMovies()} />
      <FlatListMovies title="Upcoming" request={getUpcomingMovies()} />
    </S.ContainerScreen>
  );
};
