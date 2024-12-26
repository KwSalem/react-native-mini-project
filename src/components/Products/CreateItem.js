import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const CreateItem = ({ navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleCreate = () => {
    const newItem = {
      id: Math.random().toString(),
      name,
      price,
      image,
    };
    navigation.navigate("Products", { item: newItem });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={(text) => setImage(text)}
      />
      <Button title="Create Item" onPress={handleCreate} />
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
