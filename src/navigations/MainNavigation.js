import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileDetails from "../components/Profile/ProfileDetails";
import CreateItem from "../components/Products/CreateItem";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../components/Home/HomePage";
import ProductItems from "../components/Products/ProductItem";
import ProductDetails from "../components/Products/ProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

const MainNavigation = () => {
  const TabNavigation = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="CreateItem"
          component={CreateItem}
          options={{
            tabBarLabel: "Create",

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileDetails}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Products" component={ProductItems} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </QueryClientProvider>
  );
};

export default MainNavigation;
