import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./Routes/router.js";
import { Connection } from "./Database/db.js";
//dotenv
dotenv.config();

const App = express();
//middlewares
App.use(cors());
App.use(bodyParser.json({ extended: true }));
App.use(bodyParser.urlencoded({ extended: true }));
App.use("/", Router);
const port = process.env.PORT;
const username = process.env.username;
const password = process.env.password;
Connection(username, password);

App.listen(port, () => {
  console.log(`Server is running on port ${port} !`);
});
