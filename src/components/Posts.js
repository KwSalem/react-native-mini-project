import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../apis/auth";
import { View } from "react-native";

const Posts = () => {
  const { data } = useQuery({
    queryFn: getAllPosts,
    queryKey: ["posts"],
  });

  const postList = data?.map((post) => <PostItem post={post} />);
  return <View>{postList}</View>;
};
export default Posts;
