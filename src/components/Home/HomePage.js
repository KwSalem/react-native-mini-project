import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProductsView from "../Products/ProductsView";
import ProductList from "../Products/ProductData";
const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomePage</Text>
      {/* <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products", { item:item })}
      /> */}
      <ProductList />
      {/* <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products")}
      /> */}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
