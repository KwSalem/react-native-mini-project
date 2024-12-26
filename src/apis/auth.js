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

async function addCommentPost(id) {
  const response = await instance.post(`/posts/${id}/comments`); // adding comment to post.
  console.log("addCommentPost", response);
  return response;
}

async function deleteCommentPost(id) {
  const response = await instance.delete(`/posts/comments/${id}`); //  deleting comment to post.
  console.log("deleteCommentPost", response);
  return response;
}

export {
  getAllPosts,
  addNewPost,
  getSinglePost,
  deleteSinglePost,
  addCommentPost,
  deleteCommentPost,
};
