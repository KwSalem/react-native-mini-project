import { ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProductItems from "./ProductItems";

const ProductList = () => {
  const navigation = useNavigation();
  const items = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: require("../../../assets/product1.png"),
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image: require("../../../assets/product2.png"),
    },
    {
      id: 3,
      name: "Product 3",
      price: 9.99,
      image: require("../../../assets/product3.png"),
    },
    {
      id: 4,
      name: "Product 4",
      price: 14.99,
      image: require("../../../assets/product4.png"),
    },
    {
      id: 5,
      name: "Product 5",
      price: 7.99,
      image: require("../../../assets/product5.png"),
    },
  ];

  const itemList = items.map((item) => (
    <ProductItems key={item.name} item={item} />
  ));
  return <ScrollView>{itemList}</ScrollView>;
};

export default ProductList;

// export const Products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 10.99,
//     image: require("../../../assets/product1.png"),
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 19.99,
//     image: require("../../../assets/product2.png"),
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 9.99,
//     image: require("../../../assets/product3.png"),
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     price: 14.99,
//     image: require("../../../assets/product4.png"),
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     price: 7.99,
//     image: require("../../../assets/product5.png"),
//   },
// ];
