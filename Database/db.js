import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const Connection = async (username, password) => {
  const Database_Url = `mongodb+srv://${username}:${password}@cluster0.5illgl0.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(Database_Url, () => {
      console.log("Database is connected successfully!");
    });
  } catch (e) {
    console.log(e.message);
  }
};
