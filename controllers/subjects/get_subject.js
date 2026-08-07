const subjectSchema = require("../../models/subjectSchema");


// -----------get all subjects
const getAllSubjects = async (req, res) => {
  try {
    const subjects = await subjectSchema.find();
    return res.status(200).json({
      success: true,
      message: "Subjects retrieved successfully.",
      data: subjects,
    });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};


module.exports = {
  getAllSubjects,

};
