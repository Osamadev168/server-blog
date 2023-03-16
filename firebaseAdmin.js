import Admin from "firebase-admin";
import service_account from "./ServiceAccount.json" assert { type: "json" };
import dotenv from "dotenv";
dotenv.config();
Admin.initializeApp({
  credential: Admin.credential.cert(
    process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON
  ),
});

export default Admin;
