import Comment from "../Model/Comment.js";

export const newComment = async (req, res) => {
  try {
    let comment = await new Comment(req.body);
    comment.save();
    res.status(200).json({ msg: "Comment subitted successfully" });
  } catch (e) {
    res.status(404).json({
      msg: e,
    });
  }
};
export const getComments = async (req, res) => {
  try {
    let commnets = await Comment.find({ post: req.params.id });
    res.status(200).json({ coms: commnets });
  } catch (e) {
    res.status(404).json({
      msg: e,
    });
  }
};
