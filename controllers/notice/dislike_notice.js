const noticeSchema = require("../../models/noticeSchema");


 const dislikeNotice = async (req, res) => {

const { id } = req.params;

  try {
    const notice = await noticeSchema.findById(id);

    if (!notice) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    const userId = req.user._id;

    const alreadyDisliked = notice.dislikes.some(
      (id) => id.toString() === userId.toString()
    );

    if (alreadyDisliked) {
      notice.dislikes.pull(userId);
    } else {
      notice.dislikes.push(userId);
      notice.likes.pull(userId);
    }

    await notice.save();

    res.status(200).json({
      success: true,
      message: alreadyDisliked
        ? "Dislike removed"
        : "Notice disliked successfully",
      likes: notice.likes.length,
      dislikes: notice.dislikes.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = { dislikeNotice };