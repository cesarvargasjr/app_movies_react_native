import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";
import { FavoriteMovies } from "../pages/Favorites";
import { useModalAlert } from "../context/ModalAlert";
import { SearchMovies } from "../pages/SearchMovies";
import { Home } from "../pages/Home";
import { Actors } from "../pages/Actors";
import fonts from "../utils/fonts";
import colors from "../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const navigation: any = useNavigation();
  const { setShowModal } = useModalAlert();

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: colors.white,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 21,
          fontFamily: fonts.semiBold,
        },
        headerStyle: {
          backgroundColor: colors.darkSecondary,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Filmes",
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchMovies")}
            >
              <Ionicons name="search-outline" size={30} color={colors.white} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("FavoriteMovies")}
            >
              <Ionicons name="ios-heart-sharp" size={30} color={colors.red} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="FavoriteMovies"
        component={FavoriteMovies}
        options={{
          title: "Filmes favoritos",
          headerShown: true,
          headerBackVisible: true,
          headerRight: () => (
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons name="trash" size={26} color={colors.white} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SearchMovies"
        component={SearchMovies}
        options={{
          title: "Pesquisar filme",
          headerShown: true,
          headerBackVisible: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("FavoriteMovies")}
            >
              <Ionicons name="ios-heart-sharp" size={30} color={colors.red} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Actors"
        component={Actors}
        options={{
          title: "Atores do filme",
          headerShown: true,
          headerBackVisible: true,
        }}
      />
    </Stack.Navigator>
  );
}
