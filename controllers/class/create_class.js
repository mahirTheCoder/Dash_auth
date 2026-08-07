const classSchema = require("../../models/classSchema");


// -----------create class
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


module.exports = {
  
  createClass,

};