import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./Routes/router.js";
import { Connection } from "./Database/db.js";
dotenv.config();
const App = express();
App.use(
  cors({
    origin: ["https://www.hubblefeed.com/", "http://localhost:7000"],
  })
);
App.all("*", function (req, res, next) {
  const origin = cors.origin.includes(req.header("origin").toLowerCase())
    ? req.headers.origin
    : cors.default;
  res.header("Access-Control-Allow-Origin", origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
App.use(helmet());
App.use(express.json({ limit: "50mb" }));
App.use(bodyParser.json({ limit: "50mb", extended: true }));
App.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
App.use("/", Router);
const port = process.env.PORT;
Connection();
App.listen(port, () => {
  console.log(`Server is running on port ${port} !`);
});
