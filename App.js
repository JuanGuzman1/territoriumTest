import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeBaseProvider, Text, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Navigation from "./src/navigation";
import { LinearGradient } from "expo-linear-gradient";



export default function App() {
  return (
    <NavigationContainer >
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
