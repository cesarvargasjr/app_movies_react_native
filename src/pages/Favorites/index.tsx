import React, { useEffect, useRef, useState } from "react";
import { ModalizeMovie } from "../../components/ModalizeMovie";
import { ModalAlert } from "../../components/Modal";
import { useModalAlert } from "../../context/ModalAlert";
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
  const { showModal } = useModalAlert();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [dataFavoriteMovies, setDataFavoriteMovies] = useState<any>([]);

  const openModalize = () => {
    modalizeRef.current?.open();
  };

  const getAsyncStorage = async () => {
    try {
      setLoading(true);
      const dataStorage: any = await AsyncStorage.getItem("favoriteMovies");
      setDataFavoriteMovies(
        dataStorage != null ? JSON.parse(dataStorage) : null
      );
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
  }, []);

  return (
    <>
      {showModal && (
        <ModalAlert text="Deseja realmente limpar a lista de favoritos?" />
      )}
      <S.ContainerScreen>
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
            <CardMovies movie={item} onPress={openModalize} />
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
                  <>
                    <ActivityIndicator size="large" color={colors.greyLight} />
                    <S.Text>Carregando...</S.Text>
                  </>
                )}
              {(dataFavoriteMovies?.length === 0 || !dataFavoriteMovies) &&
                !loading && <S.Text>Você não possui filmes favoritos</S.Text>}
            </S.ContainerEmpty>
          )}
        />
      </S.ContainerScreen>
    </>
  );
};
