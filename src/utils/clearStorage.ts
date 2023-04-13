import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearStorage = async () => {
  try {
    await AsyncStorage.removeItem("favoriteMovies");
  } catch (error) {
    console.log(error);
  }
};