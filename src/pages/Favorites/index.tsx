import React, { useEffect, useRef, useState } from "react";
import { ModalizeMovie } from "../../components/ModalizeMovie";
import { ModalAlert } from "../../components/Modal";
import { useModalAlert } from "../../context/ModalAlert";
import { openModalize } from "../../utils/openModalize";
import { lazyLoad } from "../../utils/lazyLoad";
import { useRedraw } from "../../context/Redraw";
import { useIsFocused } from "@react-navigation/native";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from "react-native";
import CardMovies from "../../components/Cards/CardMovies";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../utils/colors";
import * as S from "./styles";

export const FavoriteMovies = () => {
  const modalizeRef: any = useRef(null);
  const isFocused = useIsFocused();
  const { showModal } = useModalAlert();
  const { redraw } = useRedraw();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [dataFavoriteMovies, setDataFavoriteMovies] = useState<any>([]);

  const getAsyncStorage = async () => {
    try {
      setLoading(true);
      const dataStorage: any = await AsyncStorage.getItem("favoriteMovies");
      setDataFavoriteMovies(
        dataStorage != null ? JSON.parse(dataStorage) : null
      );
      await lazyLoad(300);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshScreen = async () => {
    setRefreshing(true);
    getAsyncStorage();
    setRefreshing(false);
  };

  useEffect(() => {
    getAsyncStorage();
  }, [isFocused, redraw]);

  return (
    <>
      {showModal && (
        <ModalAlert text="Deseja realmente limpar a lista de favoritos?" />
      )}
      <S.ContainerScreen>
        {loading ? (
          <ActivityIndicator size="large" color={colors.greyLight} />
        ) : (
          <>
            <ModalizeMovie modalizeRef={modalizeRef} />
            <FlatList
              onEndReachedThreshold={0.3}
              numColumns={2}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={{ alignItems: "center" }}
              ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
              data={dataFavoriteMovies}
              renderItem={(item) => (
                <CardMovies
                  movie={item}
                  onPress={() => openModalize(modalizeRef)}
                />
              )}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => refreshScreen()}
                />
              }
              ListEmptyComponent={() => (
                <S.ContainerEmpty>
                  {(dataFavoriteMovies?.length === 0 || !dataFavoriteMovies) &&
                    loading && (
                      <ActivityIndicator
                        size="large"
                        color={colors.greyLight}
                      />
                    )}
                  {(dataFavoriteMovies?.length === 0 || !dataFavoriteMovies) &&
                    !loading && (
                      <S.Text>Você não possui filmes favoritos</S.Text>
                    )}
                </S.ContainerEmpty>
              )}
            />
          </>
        )}
      </S.ContainerScreen>
    </>
  );
};
