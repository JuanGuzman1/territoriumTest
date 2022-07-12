import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const Header = (props) => {
  console.log(props);
  const insets = useSafeAreaInsets();
  return (
    <Box paddingTop={insets.top - 10}>
      <LinearGradient
        style={{ flexDirection: "row", padding: 15 }}
        colors={["#25568D", "#833197"]}
      >
        <FontAwesome
          name="bars"
          size={25}
          color={"white"}
          style={{ marginRight: "auto" }}
          onPress={() => props.navigation.toggleDrawer()}
        />
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <EvilIcons name="eye" size={28} color="white" />
          <Text color={"white"} fontSize={18}>
            territorium
          </Text>
        </Box>

        <FontAwesome
          name="shopping-cart"
          size={25}
          color={"white"}
          style={{ marginLeft: "auto" }}
        />
      </LinearGradient>
    </Box>
  );
};

const Navigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: Header,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Drawer.Navigator>
  );
};

export default Navigation;
