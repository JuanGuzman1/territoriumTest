import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "./Header";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      console.log(json.products);

      if (!json.products) {
        return;
      }

      setData(json.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => {
          return `product-${item.id}`;
        }}
        data={data}
        renderItem={({ item }) => <Card product={item} />}
        ListHeaderComponent={Header}
        initialNumToRender={5}
      />
    </View>
  );
};

export default HomeScreen;
