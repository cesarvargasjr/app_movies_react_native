import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { movieId } from "../../../store/actions/movieId";

interface CardMoviesProps {
  movie: any;
  onPress: any;
  movieId?: any;
}

const mapStateToProps = (store: { movieIdState: { movieIdReducer: any } }) => ({
  newId: store.movieIdState.movieIdReducer,
});

const mapDispatchToProps = (dispatch: any) =>
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
          width: 170,
        }}
      />
    </TouchableOpacity>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardMovies);
