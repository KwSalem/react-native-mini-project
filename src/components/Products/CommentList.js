import { StyleSheet, Text, View } from "react-native";
import React from "react";
const renderItem = ({ item }) => {
  return <CommentItem comment={item} />;
};

const CommentItem = ({ comment }) => {
  return (
    <View style={styles.commentItem}>
      <ProfilePic letter={comment.name[0]} />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text style={styles.commentBy}>{comment.name}</Text>
        <Text style={styles.commentText}>{comment.text}</Text>
      </View>
    </View>
  );
};

const ProfilePic = ({ letter = "" }) => {
  return (
    <View style={styles.profileImg}>
      <Text style={styles.profileText}>{letter.toUpperCase()}</Text>
    </View>
  );
};
const CommentList = ({ comments }) => {
  return (
    <View>
      <Text>CommentList</Text>
    </View>
  );
};

export default CommentList;

const styles = StyleSheet.create({});
