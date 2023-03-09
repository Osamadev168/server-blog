import Admin from "./firebaseAdmin.js";
export const verifyToken = async (req, res) => {
  try {
    let token = req.body.idToken;
    const adminId = "Idfri64OkLcihU4YP5j2hvC14M32";
    let decodedToken = await Admin.auth().verifyIdToken(token);
    if (decodedToken.uid === adminId) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  } catch (e) {
    res.status(401).json(false);
  }
};
