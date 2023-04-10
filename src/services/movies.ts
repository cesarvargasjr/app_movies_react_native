import api from './api';

export const getPopularMovies = async () => {
  try {
    const { data } = await api.get(`/movie/popular`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
