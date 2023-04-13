import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";
import { FavoriteMovies } from "../pages/Favorites";
import { Home } from "../pages/Home";
import fonts from "../utils/fonts";
import colors from "../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const navigation: any = useNavigation();

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
          title: "Super Movies",
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("FavoriteMovies")}
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
          title: "Favorite Movies",
          headerShown: true,
          headerBackVisible: true,
        }}
      />
    </Stack.Navigator>
  );
}
