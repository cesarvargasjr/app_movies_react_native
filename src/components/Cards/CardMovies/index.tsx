import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { connect } from "react-redux";
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { movieId } from "../../../store/actions/movieId";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as S from "./styles";
import colors from "../../../utils/colors";

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

  const RenderImage = () => {
    if (poster_path) {
      return (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w300/${poster_path}`,
          }}
          style={{
            height: 260,
            width: 170,
            maxHeight: 260,
            maxWidth: 170,
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      );
    } else {
      return (
        <S.ContainerIcon>
          <Ionicons name="images" size={90} color={colors.white} />
        </S.ContainerIcon>
      );
    }
  };

  return (
    <TouchableOpacity onPress={() => (onPress(), movieId(id))}>
      <RenderImage />
    </TouchableOpacity>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardMovies);
