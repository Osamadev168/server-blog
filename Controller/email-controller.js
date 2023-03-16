import emailjs from "@emailjs/nodejs";

export const sendEmail = async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let form = {
      name,
      email,
      message,
    };
    let response = await emailjs.send(
      "service_65f7gtk",
      "template_srlradf",
      form,
      {
        publicKey: "7OJNnLHeiz7yvdsPZ",
        privateKey: "w2OS0jmwakGLIF3KKOyTK",
      }
    );

    res.status(200).json(response.status);
  } catch (e) {
    console.error(e);
  }
};
