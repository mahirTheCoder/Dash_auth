const subjectSchema = require("../../models/subjectSchema");


// ------------delete subject
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

  deleteSubject
  
};
