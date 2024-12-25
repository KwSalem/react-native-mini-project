import { View, Text, Image } from "react-native";
import React from "react";
const ProductsView = ({ route }) => {
  const { item } = route.params;
  console.log(item);
  const { price, name, image } = item;

  return (
    <View>
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
    </View>
  );
};
// const productsList = () => {
//   ProductData.map((product) => {
//     return (
//       <View key={product.id}>
//         <Text>{product.name}</Text>
//         <Text>{product.price}</Text>
//       </View>
//     );
//   });
// };
//   return (
//     <View>
//       <ProductItems />
//       {productsList}
//     </View>
//   );
// };

export default ProductsView;
