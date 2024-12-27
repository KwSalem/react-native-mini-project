import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { deleteSinglePost } from "../../apis/auth";

const ProductDetails = ({ route }) => {
  const navigation = useNavigation();
  const { post } = route.params;
  console.log(post);
  const { title, description } = post;

  const handleDelete = async () => {
    await deleteSinglePost(post.id);
    navigation.navigate("ProductList");
  };

  return (
    <View>
      <Text> Title: {title}</Text>
      <Text> Description: {description}</Text>
      <Button
        title="Delete"
        onPress={() => {
          handleDelete();
        }}
      />
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
