import Admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();
Admin.initializeApp({
  credential: Admin.credential.cert(
    JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)
  ),
});
export default Admin;
