import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { deleteSinglePost } from "../../apis/auth";
const DeleteItem = () => {
  const [id, setId] = useState("");
  const navigation = useNavigation();

  const handleDelete = async () => {
    await deleteSinglePost(id);
    navigation.navigate("ProductList");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Post ID"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <Button title="Delete Post" onPress={handleDelete} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default DeleteItem;
