import instance from "./index";

async function getAllPosts() {
  const response = await instance.get("/posts"); //  to get all posts.
  console.log("getAllPosts", response);
  return response;
}

async function getSinglePost(id) {
  const response = await instance.get(`/posts/${id}`); //  to get single post.
  console.log("getSinglePost", response);
  return response;
}

async function addNewPost({ title, description }) {
  const response = await instance.post("/posts", { title, description }); // Adding new post (title, description).
  console.log("addNewPost", response);
  return response;
}

async function deleteSinglePost(id) {
  const response = await instance.delete(`/posts/${id}`); //  to delete single post.
  console.log("deleteSinglePost", response);
  return response;
}

async function addCommentPost(formData) {
  const { username, comment, postId } = formData;
  console.log("Add Post initial", postId);
  const data = await instance.post(`/${postId}/comments`, {
    username,
    comment,
  });
  console.log("Add Post ", data);
  return data;
}

async function deleteCommentPost(commentId) {
  console.log("Delete Comment", commentId);
  const data = await instance.delete(`/comments/${commentId}`);
  console.log("Delete Comment ", data);
  return data;
}

export {
  getAllPosts,
  addNewPost,
  getSinglePost,
  deleteSinglePost,
  addCommentPost,
  deleteCommentPost,
};
