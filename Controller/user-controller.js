import bycrpyt from "bcrypt";
import User from "../Model/user.js";
export const signup = async (req, res) => {
  try {
    const hashedPassword = await bycrpyt.hash(req.body.password, 6);
    const user = {
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
    };
    const newUser = new User(user);
    try {
      await newUser.save();
      return res.status(200).json({
        msg: "User added successfully!",
      });
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    return res.status(500).json({ msg: "Error while adding user!" });
  }
};
