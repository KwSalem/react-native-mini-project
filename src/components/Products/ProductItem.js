import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ProductList from "./ProductList";
import { useNavigation } from "@react-navigation/native";
const ProductItem = ({ post }) => {
  const { title, description } = post;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { post })}
    >
      <Text> title: {title}</Text>
      <Text> description: {description}</Text>
      {/* <Image
        source={image}
        style={{
          width: 300,
          height: 300,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 30,
        }}
      /> */}
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

export default ProductItem;
