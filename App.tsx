import { LogBox } from "react-native";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { Store } from "./src/store/storeConfig";
import { ModalAlertProvider } from "./src/context/ModalAlert";
import Routes from "./src/routes/app.routes";
import colors from "./src/utils/colors";

import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/nunito";

// Ignore all warnings
LogBox.ignoreAllLogs(true);

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const composeProviders =
    (
      ...providers: {
        ({ children }: any): JSX.Element;
      }[]
    ) =>
    (props: { children: any }) =>
      providers.reduceRight(
        (children, Provider) => <Provider {...props}>{children}</Provider>,
        props.children
      );

  const AllProviders = composeProviders(ModalAlertProvider);

  return (
    <Provider store={Store}>
      <AllProviders>
        <NavigationContainer>
          <NativeBaseProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors.darkSecondary}
            />
            <Routes />
          </NativeBaseProvider>
        </NavigationContainer>
      </AllProviders>
    </Provider>
  );
}
