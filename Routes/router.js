import express from "express";
import {
  addView,
  approvePost,
  deletePost,
  getAllPosts,
  getPostbyCategory,
  getpostbyid,
  getPostsbyPopularity,
  getPostsforCarousel,
  getSubmittedPosts,
  getUserPosts,
  post,
  submitComment,
} from "../Controller/post-controller.js";
const Router = express.Router();
Router.post("/create", post);
Router.get("/posts", getAllPosts);
Router.get("/posts/submitted", getSubmittedPosts);
Router.get("/posts/submitted/user/:author", getUserPosts);
Router.get("/getpostsforcarousel", getPostsforCarousel);
Router.get("/post/:id", getpostbyid);
Router.delete("/post/:id", deletePost);
Router.post("/post/:id", addView);
Router.get("/posts/:category", getPostbyCategory);
Router.post("/post/:id/new/comment", submitComment);
Router.get("/popular", getPostsbyPopularity);
Router.post("/post/approve/:id", approvePost);
export default Router;
