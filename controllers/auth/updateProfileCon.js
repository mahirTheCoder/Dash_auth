const { uploadCloudinary, destroyFromCloudinary } = require("../../helpers/utils");
const userSchema = require("../../models/userSchema");

// --------------update profile controller
const updateProfile = async (req, res) => {
  const { fullname, address } = req.body;
  const avatar = req.file;

  try {
    const user = await userSchema.findOne({
      _id: req.user._id,
    });

    if (!user) {
      return res.status(400).send({
        message: "Invalid Request",
      });
    }

    if (fullname?.trim()) {
      user.fullname = fullname;
    }

    if (address?.trim()) {
      user.address = address;
    }

    if (avatar) {
      try {
        const avatarUrl = await uploadCloudinary({
          mimetype: avatar.mimetype,
          imgBuffer: avatar.buffer,
        });

        if (user.avatar) destroyFromCloudinary(user.avatar);
        user.avatar = avatarUrl;
      } catch (error) {
        console.log("Cloudinary upload error", error);
        return res.status(500).send({ message: "Failed to upload avatar" });
      }
    }

    await user.save();

    res.status(200).send({
      message: "Profile Updated",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      message: "Server Error",
    });
  }
};

module.exports = {
  updateProfile,
};