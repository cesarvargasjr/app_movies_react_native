import React, { useEffect, useRef, useState } from "react";
import { getSearchMovie } from "../../services/movies";
import { ModalizeMovie } from "../../components/ModalizeMovie";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native";
import { Input } from "../../components/Input";
import { openModalize } from "../../utils/openModalize";
import { idGenerator } from "../../utils/idGenerator";
import { useDebounce } from "../../utils/debounce";
import CardMovies from "../../components/Cards/CardMovies";
import colors from "../../utils/colors";
import * as S from "./styles";

export const SearchMovies = () => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState("");
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [redraw, setRedraw] = useState<boolean>(false);
  const modalizeRef: any = useRef(null);

  const apiSearch = async (text: any) => {
    setLoading(true);
    const response = await getSearchMovie(1, text);
    setValue(text);
    setTotalPages(response?.total_pages);
    setData(response.results);
    setRedraw((v) => !v);
    setLoading(false);
  };

  const apiSearchPaginate = async (text: any) => {
    const response = await getSearchMovie(page, text);
    setValue(text);
    setTotalPages(response?.total_pages);
    setData([...data, ...response.results]);
  };

  const handleSearch = useDebounce(apiSearch);

  useEffect(() => {}, [redraw]);

  useEffect(() => {
    apiSearchPaginate(value);
  }, [page]);

  return (
    <S.ContainerScreen>
      <Input
        typeInput="search"
        placeholder="Digite aqui para pesquisar"
        onChangeText={(value) => handleSearch(value)}
      />
      {loading ? (
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
              contentContainerStyle={{ alignItems: "center" }}
              ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
              showsVerticalScrollIndicator={false}
              keyExtractor={idGenerator}
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
                  {value === "" && data?.length === 0 && (
                    <S.TextEmpity>Faça sua pesquisa</S.TextEmpity>
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
