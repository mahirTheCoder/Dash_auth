const noticeSchema = require("../../models/noticeSchema");

// ---------create notice
const createNotice = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    const notice = await noticeSchema.create({
      title,
      description,
      image: image || null,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Notice created successfully",
      notice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



module.exports = { createNotice };