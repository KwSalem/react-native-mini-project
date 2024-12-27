import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addNewPost } from "../../apis/auth";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();

  const handleCreate = async () => {
    const newPost = {
      title,
      description,
    };
    await addNewPost(newPost);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Create Post" onPress={handleCreate} />
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

export default CreateItem;
