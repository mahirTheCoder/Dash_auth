const subjectSchema = require("../models/subjectSchema");

const createSubject = async (req, res) => {
  const { creatorId, subjectName, code, credits, description } = req.body;

  try {
    if (!creatorId || !subjectName || !code || !credits || !description) {
      return res.status(400).json({
        success: false,
        message:
          "Creator ID, Subject Name, Code, Credits, and Description are required fields.",
      });
    }

    const existingSubject = await subjectSchema.findOne({ code });
    if (existingSubject) {
      return res.status(400).json({
        success: false,
        message: "A subject with this code already exists.",
      });
    }

    const newSubject = await subjectSchema.create({
      creatorId,
      subjectName,
      code,
      credits,
      description,
    });
    return res.status(201).json({
      success: true,
      message: "Subject created successfully.",
      data: newSubject,
    });
  } catch (error) {
    console.error("Error creating subject:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

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

const deleteSubject = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSubject = await subjectSchema.findByIdAndDelete(id);
    if (!deletedSubject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Subject deleted successfully.",
      data: deletedSubject,
    });
  } catch (error) {
    console.error("Error deleting subject:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

module.exports = {
  createSubject,
  getAllSubjects,
  deleteSubject,
};
