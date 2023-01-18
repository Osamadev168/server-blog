import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const Connection = async () => {
  const Database_Url = `mongodb://mongo:AzQXLUDFgnWOfmlzMj4v@containers-us-west-139.railway.app:5889`;
  try {
    await mongoose.connect(Database_Url, () => {
      console.log("Database is connected successfully!");
    });
  } catch (e) {
    console.log(e.message);
  }
};
