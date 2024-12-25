import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileDetails = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/product1.png")}
        style={styles.image}
      />
      <Text style={styles.name}>Salem Salman</Text>
      <Text style={styles.email}>salem@example.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
});

export default ProfileDetails;
