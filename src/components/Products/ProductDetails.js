import { View, Text, Button, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { deleteSinglePost } from "../../apis/auth";
import ProductItem from "./ProductItem";
import {
  addCommentPost,
  deleteCommentPost,
  getSinglePost,
} from "../../apis/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
const ProductDetails = ({ route }) => {
  const navigation = useNavigation();
  const { id, title, description } = route.params.post;

  const [comment, setComment] = useState("");
  const { data, refetch, isFetching, isSuccess } = useQuery({
    queryKey: ["PostById", id],
    queryFn: () => getSinglePost(id),
    enabled: !!id,
  });

  const handleAddComment = useMutation({
    mutationKey: ["AddedComment", id],
    mutationFn: (commentData) => addCommentPost(commentData),
    onSuccess: () => {
      refetch();
      alert("Comment Added !");
    },
    onError: () => alert("Failed to add the Comment !"),
  });

  const deleteCommentMutation = useMutation({
    mutationKey: ["DeletedComment" + id],
    mutationFn: (commentId) => deleteCommentPost(commentId),
    onSuccess: () => {
      refetch();
      alert("Comment Deleted !");
    },
    onError: () => alert("Failed to delete the Comment !"),
  });

  const handleDelete = async () => {
    await deleteSinglePost(id);
    navigation.navigate("ProductList");
  };

  let comments = data?.comments?.map((comment, index) => (
    <View key={`${id}-comment-${index}`}>
      <Text style={{ fontSize: 20 }}>
        {comment.username}: {comment.comment}
      </Text>
      <Button onPress={() => deleteCommentMutation.mutate(comment.id)}>
        <MaterialIcons name="delete" size={24} color="black" />
      </Button>
    </View>
  ));

  return (
    //     <View style={styles.container}>
    //       <View style={styles.post}>
    //         <Text style={styles.text}> title: {title}</Text>
    //         <Text style={styles.text}>description: {description}</Text>
    //       </View>
    //       <View style={styles.newComment}>
    //         <TextInput
    //           style={styles.inputField}
    //           onChangeText={(newComment) => setComment(newComment)}
    //         ></TextInput>
    //         <TouchableOpacity
    //           onPress={() =>
    //             addCommentMutation.mutate({
    //               username: "Salem",
    //               comment,
    //               postId: id,
    //             })
    //           }
    //         >
    //           <Ionicons name="add-circle" size={40} color="#C73659" />
    //         </TouchableOpacity>
    //       </View>
    //       <ScrollView>
    //         {comments}
    //         <View style={styles.comment}></View>
    //       </ScrollView>
    //     </View>
    //   );
    // };

    <ScrollView>
      <View>
        {isSuccess && (
          <>
            <Text> Title: {data.title}</Text>
            <Text> Description: {data.description}</Text>
          </>
        )}
        <Button title="Delete" onPress={handleDelete} />
        <Text>Comments</Text>
        <TextInput
          // placeholder="Comment"
          // value={comment}
          onChangeText={(newComment) => setComment(newComment)}
        />
        <Button
          title="Add Comment"
          onPress={() =>
            handleAddComment.mutate({
              username: "Salem",
              comment,
              postId: id,
            })
          }
        />
        <ScrollView>
          {comments}
          <View style={{ fontSize: 35 }} />
        </ScrollView>
        <View style={{ marginTop: 20 }}>
          {isSuccess && (
            <ProductItem key={id} post={data} comments={comments} />
          )}
        </View>
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
    </ScrollView>
  );
};

export default ProductDetails;
