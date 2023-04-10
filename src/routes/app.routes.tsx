import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import colors from "../utils/colors";
import fonts from "../utils/fonts";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.black,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 21,
          fontFamily: fonts.semiBold,
        },
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: true,
          headerBackVisible: true,
        }}
      />
    </Stack.Navigator>
  );
}
