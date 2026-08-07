const classSchema = require("../../models/classSchema");


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


module.exports = {

  getClasses

};