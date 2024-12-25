import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../components/Home/HomePage";
import ProductItems from "../components/Products/ProductItems";
import ProductsView from "../components/Products/ProductsView";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Products" component={ProductsView} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
