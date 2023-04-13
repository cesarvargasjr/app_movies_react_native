import { UPDATE_MOVIE_ID } from "../actions/actionsTypes";

const initialState = {
  newId: 0,
};

export const movieIdReducer = (
  state = initialState,
  action: { type: any; movieId: any }
) => {
  switch (action.type) {
    case UPDATE_MOVIE_ID:
      return {
        ...state,
        newId: action.movieId,
      };
    default:
      return state;
  }
};
