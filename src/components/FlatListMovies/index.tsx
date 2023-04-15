import React, { ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { idGenerator } from "../../utils/idGenerator";
import CardMovies from "../Cards/CardMovies";
import colors from "../../utils/colors";
import * as S from "./styles";

interface FlatListProps {
  title: string;
  request: any;
  onPress: () => void;
}

export const FlatListMovies = ({ title, request, onPress }: FlatListProps) => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const handleData = async () => {
    setLoading(true);
    const response = await request(page);
    setData([...data, ...response.results]);
    setTotalPages(response?.total_pages);
    setLoading(false);
  };

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
        keyExtractor={idGenerator}
        data={data}
        renderItem={(item) => <CardMovies movie={item} onPress={onPress} />}
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
      />
    </S.ContainerFlatList>
  );
};
