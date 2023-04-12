import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import colors from "../utils/colors";
import fonts from "../utils/fonts";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.white,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 21,
          fontFamily: fonts.semiBold,
        },
        headerStyle: {
          backgroundColor: colors.dark,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Filmes",
          headerShown: true,
          headerBackVisible: true,
        }}
      />
    </Stack.Navigator>
  );
}
