import React, { ActivityIndicator, FlatList, View } from "react-native";
import { CardMovies } from "../Cards/CardMovies";
import { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import * as S from "./styles";
import colors from "../../utils/colors";

interface FlatListProps {
  title: string;
  request: any;
}

export const FlatListMovies = ({ title, request }: FlatListProps) => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleData = async () => {
    setLoading(true);
    const response = await request;
    setData([...data, ...response.results]);
    setTotalPages(response?.total_pages);
    setLoading(false);
  };

  // const refreshFilter = () => {
  //   handleData();
  // };

  useEffect(() => {
    handleData();
  }, [page]);

  return (
    <S.ContainerFlatList>
      <S.Title>{title}</S.Title>
      <FlatList
        horizontal
        onEndReachedThreshold={0.3}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
        ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
        data={data}
        renderItem={(item) => (
          <CardMovies posterPath={item?.item?.poster_path} key={item} />
        )}
        onEndReached={() => page <= totalPages && !loading && setPage(page + 1)}
        ListFooterComponent={() => (
          <>
            {page > 1 && loading && (
              <ActivityIndicator
                size="large"
                color={colors.greyLight}
                style={S.Styles.ActivityIndicator}
              />
            )}
          </>
        )}
        ListEmptyComponent={() => (
          <S.ContainerListEmpty>
            {data?.length === 0 && !loading && (
              <S.TextEmpity>
                Nenhum filme encontrado nesta categoria
              </S.TextEmpity>
            )}
          </S.ContainerListEmpty>
        )}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={() => refreshFilter()}
        //   />
        // }
      />
    </S.ContainerFlatList>
  );
};
