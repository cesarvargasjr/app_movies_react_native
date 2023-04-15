import { useEffect, useState } from "react";
import { getActorsMovie } from "../../services/movies";
import { FlatList } from "react-native";
import { idGenerator } from "../../utils/idGenerator";
import { CardActor } from "../../components/Cards/CardActors";
import { ActivityIndicator } from "react-native";
import { lazyLoad } from "../../utils/lazyLoad";
import { RefreshControl } from "react-native";
import colors from "../../utils/colors";
import * as S from "./styles";

export const Actors = ({ route }: any) => {
  const params = route?.params;
  const [dataActors, setDataActors] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleDataActors = async () => {
    setLoading(true);
    const response = await getActorsMovie(params?.movieId);
    setDataActors(response?.cast);
    await lazyLoad(500);
    setLoading(false);
  };

  const refreshScreen = async () => {
    setLoading(true);
    handleDataActors();
    setLoading(false);
  };

  useEffect(() => {
    handleDataActors();
  }, []);

  return (
    <S.ContainerScreen>
      <S.Title>{params?.movie}</S.Title>
      <FlatList
        onEndReachedThreshold={0.3}
        numColumns={2}
        keyExtractor={idGenerator}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
        data={dataActors}
        renderItem={(item) => <CardActor actor={item} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => refreshScreen()}
          />
        }
        ListEmptyComponent={() => (
          <>
            {(dataActors?.length === 0 || !dataActors) && loading && (
              <ActivityIndicator size="large" color={colors.greyLight} />
            )}
            {(dataActors?.length === 0 || !dataActors) && !loading && (
              <S.Text>Nenhum ator encontrado.</S.Text>
            )}
          </>
        )}
      />
    </S.ContainerScreen>
  );
};
