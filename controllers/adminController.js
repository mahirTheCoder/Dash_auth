const userSchema = require("../models/userSchema");

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


const getPendingUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const filter = {
      isApproved: false,
      role: { $in: ["teacher", "student"] },
    };

    const total = await User.countDocuments(filter);
    const pendingUsers = await User.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      success: true,
      message: "Pending users retrieved successfully.",
      data: {
        users: pendingUsers.map(formatUser),
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: total,
          itemsPerPage: limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve pending users.",
      error: error.message,
    });
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
  getStudents,
  getTeachers,
  approvedUserCheck,
  getPendingUsers,
  deleteUserCheck,
};
