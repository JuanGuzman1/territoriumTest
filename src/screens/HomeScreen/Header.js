import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={{
        uri: "https://img.etimg.com/thumb/msid-74945159,width-640,resizemode-4,imgsize-1034392/work-from-home-like-a-pro.jpg",
      }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nuevo curso</Text>
        <Text style={styles.title}>
          Tecnicas de ilustracion para libros infantiles
        </Text>
        <Text style={styles.text}>Ver mas</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 16 / 9,
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.8,
  },
  textContainer: {
    marginLeft: 20,
  },
  text: {
    color: "white",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default Header;
