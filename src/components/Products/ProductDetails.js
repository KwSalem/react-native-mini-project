import { View, Text, Button, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { deleteSinglePost } from "../../apis/auth";
import { addCommentPost } from "../../apis/auth";

const ProductDetails = ({ route }) => {
  const navigation = useNavigation();
  const { post } = route.params;
  console.log(post);
  const { title, description } = post;
  const handleAddComment = async () => {
    const comment = {
      postId: post.id,
      body: "This is a comment",
    };
    await addCommentPost(comment);
    navigation.navigate("ProductList");
  };
  const handleDelete = async () => {
    await deleteSinglePost(post.id);
    navigation.navigate("ProductList");
  };

  return (
    <View>
      <Text> Title: {title}</Text>
      <Text> Description: {description}</Text>
      <Button title="Delete" onPress={handleDelete} />
      <Text>Comments</Text>
      <TextInput placeholder="Comment" />
      <Button title="Add Comment" onPress={handleAddComment} />
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
