const userSchema = require("../../models/userSchema");


// ---------getStudents
const getStudents = async (req, res) => {
  try {
    const { status } = req.query;

    const filter = {
      role: "student",
    };

    if (status === "approved") {
      filter.isApproved = true;
    } else if (status === "pending") {
      filter.isApproved = false;
    }

    const students = await userSchema.find(filter).sort({ createdAt: -1 });

    if (!students) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    console.log("Student Users:", students);

    return res.status(200).json({
      success: true,
      message: "Students retrieved successfully",
      count: students.length,
      students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve students.",
      error: error.message,
    });
  }
};



module.exports = {
  getStudents,
};
