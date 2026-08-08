const noticeSchema = require("../../models/noticeSchema");

// ---------like notice
 const likeNotice = async (req, res) => {

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

    const alreadyLiked = notice.likes.some(
      (id) => id.toString() === userId.toString()
    );

    if (alreadyLiked) {
      notice.likes.pull(userId);
    } else {
      notice.likes.push(userId);
      notice.dislikes.pull(userId);
    }

    await notice.save();

    res.status(200).json({
      success: true,
      message: alreadyLiked
        ? "Like removed"
        : "Notice liked successfully",
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

module.exports = { likeNotice };