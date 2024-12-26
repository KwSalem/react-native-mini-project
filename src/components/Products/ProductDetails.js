import { View, Text, Image } from "react-native";
import React from "react";
const ProductDetails = ({ route }) => {
  const { post } = route.params;
  console.log(post);
  const { title, description } = post;

  return (
    <View>
      <Text> Title: {title}</Text>
      <Text> Description: {description}</Text>
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

export default ProductDetails;
