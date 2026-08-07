const userSchema = require("../../models/userSchema");

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

    const teachers = await userSchema.find(filter).sort({ createdAt: -1 });

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

module.exports = {
  getTeachers,
};
