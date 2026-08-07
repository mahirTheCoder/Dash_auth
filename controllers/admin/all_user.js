const userSchema = require("../../models/userSchema");

// ----------allUserCheck
const allUserCheck = async (req, res) => {
  try {
    const { role, status } = req.query;
    const filter = {};

    if (role && ["admin", "teacher", "student"].includes(role)) {
      filter.role = role;
    }

    if (status === "approved") {
      filter.isApproved = true;
    } else if (status === "pending") {
      filter.isApproved = false;
    }

    const users = await userSchema.find(filter).sort({ createdAt: -1 });
    console.log("All Users:", users);

    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully.",
      count: users.length,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve users.",
      error: error.message,
    });
  }
};

module.exports = {
  allUserCheck,
};
