const noticeSchema = require("../../models/noticeSchema");


const deleteNotice = async (req, res) => {
 
    const { id } = req.params;

  try {
    const notice = await noticeSchema.findById(id);

    if (!notice) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    await noticeSchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Notice deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { deleteNotice };