const classSchema = require("../models/classSchema");


const createClass = async (req, res) => {
  try {
    const { name, code, description, creatorId, subjects } = req.body;

    if (!name || !code || !creatorId) {
      return res.status(400).json({
        success: false,
        message: "Name, code, and creatorId are required.",
      });
    }

    const newClass = await classSchema.create({
      name,
      code,
      description,
      creatorId,
      subjects: subjects || [],
    });

    res.status(201).json({
      success: true,
      message: "Class created successfully.",
      data: (newClass),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating class.",
      error: error.message,
    });
  }
};

// ---------get all classes
const getClasses = async (req, res) => {
  try {
    const classes = await classSchema.find().populate("subjects");
    res.status(200).json({
      success: true,
        message: "Classes retrieved successfully.",
        data: classes,
    });
    } catch (error) {
    res.status(500).json({
        success: false,
        message: "Error retrieving classes.",
        error: error.message,
    });
  }
};


const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code, description, subjects } = req.body;

    const cls = await classSchema.findById(id);
    if (!cls) {
      return res.status(404).json({
        success: false,
        message: "Class not found.",
      });
    }

    if (name !== undefined) cls.name = name;
    if (code !== undefined) cls.code = code;
    if (description !== undefined) cls.description = description;
    if (subjects !== undefined) cls.subjects = subjects;

    await cls.save();

    res.status(200).json({
      success: true,
      message: "Class updated successfully.",
      data: cls,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating class.",
      error: error.message,
    });
  }
};


const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;

    const cls = await classSchema.findById(id);
    if (!cls) {
      return res.status(404).json({
        success: false,
        message: "Class not found.",
      });
    }

    await classSchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Class deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting class.",
      error: error.message,
    });
  }
};

module.exports = {
  createClass,
  getClasses,
  updateClass,
  deleteClass,
};