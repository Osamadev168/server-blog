import bycrpyt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Model/user.js";
import token from "../Model/token.js";
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
export const signin = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res
      .status(404)
      .json({ msg: "User not found or Account doesnt exists" });
  }
  try {
    let matchPassword = await bycrpyt.compare(req.body.password, user.password);
    if (matchPassword) {
      const accesstoken = jwt.sign(user.toJSON(), process.env.AccessToken, {
        expiresIn: "10m",
      });
      const refreshToken = jwt.sign(user.toJSON(), process.env.RefreshToken);

      const newToken = new token({ token: refreshToken });
      await newToken.save();
      return res
        .status(200)
        .json({
          name: user.name,
          username: user.username,
          accesstoken: accesstoken,
          refreshToken: refreshToken,
        });
    } else {
      res.status(404).json({ msg: "Incorrect pssword" });
    }
  } catch (e) {
    res.status(500).json({ msg: "Failure" });
  }
};
