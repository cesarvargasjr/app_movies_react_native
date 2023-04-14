import React, { useEffect, useRef, useState } from "react";
import { getSearchMovie } from "../../services/movies";
import { ModalizeMovie } from "../../components/ModalizeMovie";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native";
import { Input } from "../../components/Input";
import { openModalize } from "../../utils/openModalize";
import CardMovies from "../../components/Cards/CardMovies";
import colors from "../../utils/colors";
import * as S from "./styles";

export const SearchMovies = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const modalizeRef: any = useRef(null);

  const handleData = async () => {
    setLoading(true);
    if (value !== "") {
      const response = await getSearchMovie(page, value);
      setData([...data, ...response.results]);
      setTotalPages(response?.total_pages);
    } else {
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleData();
  }, [page, value]);

  return (
    <S.ContainerScreen>
      <Input
        typeInput="search"
        placeholder="Digite aqui para pesquisar"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      {value === "" && data?.length === 0 && (
        <S.TextEmpity>Faça sua pesquisa</S.TextEmpity>
      )}
      {value !== "" && loading ? (
        <ActivityIndicator
          size="large"
          color={colors.greyLight}
          style={S.Styles.ActivityIndicator}
        />
      ) : (
        <>
          <ModalizeMovie modalizeRef={modalizeRef} />
          <S.ContainerFlatList>
            <FlatList
              numColumns={2}
              onEndReachedThreshold={0.3}
              ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={data}
              renderItem={(item) => (
                <CardMovies
                  movie={item}
                  onPress={() => openModalize(modalizeRef)}
                />
              )}
              onEndReached={() =>
                page <= totalPages && !loading && setPage(page + 1)
              }
              ListFooterComponent={() => (
                <>
                  {page > 1 && loading && (
                    <ActivityIndicator size="large" color={colors.greyLight} />
                  )}
                </>
              )}
              ListEmptyComponent={() => (
                <>
                  {value !== "" && data?.length === 0 && !loading && (
                    <S.TextEmpity>Busca não encontrada</S.TextEmpity>
                  )}
                </>
              )}
            />
          </S.ContainerFlatList>
        </>
      )}
    </S.ContainerScreen>
  );
};
