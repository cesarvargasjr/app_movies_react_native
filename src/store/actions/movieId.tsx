import { UPDATE_MOVIE_ID } from "./actionsTypes";

export const movieId = (newMovieId: any) => {
  return {
    type: UPDATE_MOVIE_ID,
    movieId: newMovieId,
  };
};
