const classSchema = require("../../models/classSchema");


// ------------delete class

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
  deleteClass,
};
