import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { connect } from "react-redux";
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { movieId } from "../../../store/actions/movieId";

interface CardMoviesProps {
  movie: any;
  movieId?: any;
  onPress: () => void;
}

const mapStateToProps = (store: { movieIdState: { movieIdReducer: any } }) => ({
  newId: store.movieIdState.movieIdReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ movieId }, dispatch);

const CardMovies = ({ movie, onPress, movieId }: CardMoviesProps) => {
  const { id, poster_path } = movie?.item;

  return (
    <TouchableOpacity onPress={() => (onPress(), movieId(id))}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w300/${poster_path}`,
        }}
        style={{
          resizeMode: "contain",
          height: 260,
          width: 190,
        }}
      />
    </TouchableOpacity>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardMovies);
