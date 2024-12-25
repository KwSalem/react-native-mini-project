import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ProductList from "./ProductData";
import { useNavigation } from "@react-navigation/native";
const ProductItems = ({ item }) => {
  const { price, name, image } = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Products", { item: item })}
    >
      <Text> Name: {name}</Text>
      <Text> Price: {price}</Text>
      <Image
        source={image}
        style={{
          width: 300,
          height: 300,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 30,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductItems;
