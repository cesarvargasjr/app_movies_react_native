import api from './api';

export const getPopularMovies = async (page?: number) => {
  try {
    const { data } = await api.get(`/movie/popular?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getNowPlayingMovies = async (page?: number) => {
  try {
    const { data } = await api.get(`/movie/now_playing?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getTopRatedMovies = async (page?: number) => {
  try {
    const { data } = await api.get(`/movie/top_rated?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUpcomingMovies = async (page?: number) => {
  try {
    const { data } = await api.get(`/movie/upcoming?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getMovie = async (id: number) => {
  try {
    const { data } = await api.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSearchMovie = async (page: number, value: string) => {
  try {
    const { data } = await api.get(`/search/movie?query=${value}&page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getActorsMovie = async (id: string) => {
  try {
    const { data } = await api.get(`/movie/${id}/credits`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
