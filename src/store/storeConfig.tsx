import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { movieIdReducer } from "./reducers/movieIdReducer";

export const Reducers = combineReducers({
  movieIdState: movieIdReducer,
});

export const Store = createStore(Reducers);
