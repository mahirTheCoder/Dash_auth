const userSchema = require("../../models/userSchema");

// ----------approvedUserCheck
const approvedUserCheck = async (req, res) => {
  const params = req.params.id;
  try {
    const approvedUsers = await userSchema.findByIdAndUpdate(
      params,
      { isApproved: true },
      { new: true },
    );
    res.status(200).json({
      message: "Approved users check successful",
      users: approvedUsers,
    });
  } catch (error) {
    console.error("Error in approved users check:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  approvedUserCheck,
};
