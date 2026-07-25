const userSchema = require("../models/userSchema");

// ----------allUserCheck
const allUserCheck = async (req, res) => {
  try {
    const allUsers = await userSchema.find({ role: ["student", "teacher"] });

    if (!allUsers) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    console.log("All Users:", allUsers);

    res.status(200).json({ message: "Admin check successful" });
  } catch (error) {
    console.error("Error in admin check:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ---------studentUserCheck
const studentUserCheck = async (req, res) => {
  try {
    const studentUsers = await userSchema.find({ role: "student" });

    if (!studentUsers) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    console.log("Student Users:", studentUsers);

    res.status(200).json({ message: "Admin check successful" });
  } catch (error) {
    console.error("Error in admin check:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ---------teacherUserCheck
const getTeachers = async (req, res) => {
  try {
    const { status } = req.query;

    const filter = {
      role: "teacher",
    };

    if (status === "approved") {
      filter.isApproved = true;
    } else if (status === "pending") {
      filter.isApproved = false;
    }

    const teachers = await userSchema
      .find(filter)
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Teachers retrieved successfully",
      count: teachers.length,
      teachers,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

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
  allUserCheck,
  studentUserCheck,
  teacherUserCheck,
  approvedUserCheck,
  deleteUserCheck,
};
