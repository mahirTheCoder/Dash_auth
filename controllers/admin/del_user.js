const userSchema = require("../../models/userSchema");


// ----------deleteUserCheck
const deleteUserCheck = async (req, res) => {
  const params = req.params.id;
  try {
    const deletedUser = await userSchema.findByIdAndDelete(params);
    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error in delete user check:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  deleteUserCheck
};
