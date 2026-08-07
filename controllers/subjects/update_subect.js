const subjectSchema = require("../../models/subjectSchema");



// ----------upadte subject

const updateSubject = async (req, res) => {
  const { id } = req.params;
  const { subjectName, code, credits, description } = req.body;

  try {
    const updatedSubject = await subjectSchema.findByIdAndUpdate(
      id,
      { subjectName, code, credits, description },
      { new: true }
    );
    if (!updatedSubject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Subject updated successfully.",
      data: updatedSubject,
    });
  } catch (error) {
    console.error("Error updating subject:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};


module.exports = {

  updateSubject
  
};
