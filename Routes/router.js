import express from "express";
import { getComments, newComment } from "../Controller/comments-controller.js";
import { uploadImage } from "../Controller/image-controller.js";
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
import { signin, signup } from "../Controller/user-controller.js";
const Router = express.Router();
Router.post("/signup", signup);
Router.post("/signin", signin);
Router.post("/create", post);
Router.get("/posts", getAllPosts);
Router.get("/posts/submitted", getSubmittedPosts);
Router.get("/posts/submitted/user/:author", getUserPosts);
Router.get("/getpostsforcarousel", getPostsforCarousel);
Router.get("/post/:id", getpostbyid);
Router.delete("/post/:id", deletePost);
Router.post("/post/:id", addView);
Router.get("/posts/:category", getPostbyCategory);
Router.post("/uploadimage", uploadImage);
Router.post("/post/:id/new/comment", submitComment);
Router.get("/popular", getPostsbyPopularity);
Router.get("/comments/:id", getComments);
Router.post("/post/approve/:id", approvePost);
export default Router;
