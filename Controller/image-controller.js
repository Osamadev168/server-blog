import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: "ddwvsarat",
  api_key: "496741859843186",
  api_secret: "_xr_0-U0eskBUQoF3XoseRknJh0",
});
export const uploadImage = async (req, res) => {
  try {
    const image = req.files.image;

    cloudinary.v2.config({
      cloud_name: "ddwvsarat",
      api_key: "496741859843186",
      api_secret: "_xr_0-U0eskBUQoF3XoseRknJh0",
    });
    await cloudinary.v2.uploader.upload(image.tempFilePath, (err, result) => {
      console.log(result.url);
      console.log("Succesfully");
    });
    // res.status(200).json({ image: uploadResponse });
  } catch (e) {
    console.log(e);
  }
};
