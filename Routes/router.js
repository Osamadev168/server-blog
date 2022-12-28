import express from "express";
import { signup } from "../Controller/user-controller.js";
const Router = express.Router();
Router.post("/signup", signup);
export default Router;
