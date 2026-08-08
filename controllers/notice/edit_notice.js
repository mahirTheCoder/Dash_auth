const noticeSchema = require("../../models/noticeSchema");


export const editNotice = async (req, res) => {

    const { id } = req.params;

  try {
    const { title, description, image } = req.body;

    const notice = await noticeSchema.findById(id);

    if (!notice) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    notice.title = title || notice.title;
    notice.description = description || notice.description;

    if (image !== undefined) {
      notice.image = image;
    }

    await notice.save();

    res.status(200).json({
      success: true,
      message: "Notice updated successfully",
      notice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { editNotice };
