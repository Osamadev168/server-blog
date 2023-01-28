import express from "express";
import {
  addView,
  approvePost,
  deletePost,
  getLatestPosts,
  getPopularPosts,
  getPostbyCategory,
  getpostbyid,
  getPostsbyPopularity,
  getSubmittedPosts,
  getUserPosts,
  post,
  submitComment,
} from "../Controller/post-controller.js";
const Router = express.Router();
Router.post("/create", post);
Router.post("/latestposts", getLatestPosts);
Router.get("/posts/submitted", getSubmittedPosts);
Router.get("/posts/submitted/user/:author", getUserPosts);
Router.post("/popularposts", getPopularPosts);
Router.get("/post/:id", getpostbyid);
Router.delete("/post/:id", deletePost);
Router.post("/post/:id", addView);
Router.get("/posts/:category", getPostbyCategory);
Router.post("/post/:id/new/comment", submitComment);
Router.get("/popular", getPostsbyPopularity);
Router.post("/post/approve/:id", approvePost);
export default Router;
