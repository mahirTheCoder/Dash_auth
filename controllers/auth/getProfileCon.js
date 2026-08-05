const userSchema = require("../../models/userSchema");


// -----------profile controllerp
const getProfile = async (req, res) => {
  try {
    const user = await userSchema.findOne(
      { _id: req.user._id },
      { fullname: 1, email: 1, role: 1, avatar: 1, address: 1 },
    );

    if (!user) return res.status(400).send({ message: "Invalid request" });

    res.status(200).send(user);
  } catch (error) {
    console.log("PROFILE ERROR:", error);

    return res.status(500).send({
      message: "Internal Server Error.",
    });
  }
};


module.exports = {
  getProfile,
};
