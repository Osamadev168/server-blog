import PostModel from "../Model/Post.js";

export const post = async (req, res) => {
  const {
    image,
    title,
    body,
    category,
    description,
    comments,
    author,
    approved,
  } = req.body;
  const CreatedAt = Date.parse(req.body.CreatedAt);
  const postData = {
    image,
    title,
    body,
    category,
    CreatedAt,
    description,
    comments,
    author,
    approved,
  };
  const newPost = new PostModel(postData);
  try {
    await newPost.save();
    return res.status(200).json({
      msg: "post added successfully!",
    });
  } catch (e) {
    console.log(e);
  }
};
export const getAllPosts = async (req, res) => {
  try {
    let posts;
    posts = await PostModel.find({ approved: true }).sort({
      CreatedAt: "desc",
    });
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
  }
};
export const getSubmittedPosts = async (req, res) => {
  try {
    let posts;
    posts = await PostModel.find({ approved: false }).sort({
      CreatedAt: "desc",
    });
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
  }
};
export const getPostsforCarousel = async (req, res) => {
  try {
    let posts;
    posts = await PostModel.find({}).sort({ CreatedAt: "desc" }).limit(10);
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
  }
};
export const getUserPosts = async (req, res) => {
  try {
    let posts;
    let author = req.params.author;
    posts = await PostModel.find({ author: author }).sort({
      CreatedAt: "desc",
    });
    res.status(200).json(posts);
    console.log(posts);
  } catch (e) {
    console.log(e);
  }
};
export const getpostbyid = async (req, res) => {
  try {
    const Post = await PostModel.findById(req.params.id);
    res.status(200).json(Post);
  } catch (e) {
    res.status(400).json("Post not found");
  }
};
export const deletePost = async (req, res) => {
  try {
    await PostModel.findById(req.params.id).deleteOne();
    res.status(200).json("Postdeleted!");
  } catch (e) {
    res.status(400).json("Post not found");
  }
};
export const getPostbyCategory = async (req, res) => {
  try {
    let posts;
    posts = await PostModel.find({
      category: req.params.category,
      approved: true,
    }).sort({
      CreatedAt: "desc",
    });
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
  }
};
export const submitComment = async (req, res) => {
  try {
    const id = req.params.id;
    const newComment = await PostModel.updateOne(
      { _id: id },
      {
        $push: {
          comments: {
            username: req.body.username,
            comment: req.body.comment,
            date: new Date(),
          },
        },
        $inc: { commentslength: 1 },
      }
    );
    res.status(200).json(newComment);
  } catch (e) {
    console.log(e);
  }
};

export const getPostsbyPopularity = async (req, res) => {
  try {
    let posts;
    posts = await PostModel.find({ approved: true })
      .sort({ views: "desc" })
      .limit(20);
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
  }
};
export const addView = async (req, res) => {
  try {
    const id = req.params.id;
    await PostModel.updateOne(
      { _id: id },
      {
        $inc: {
          views: 1,
        },
      }
    );
    res.status(200).json("success!");
  } catch (e) {
    res.status(400).json(e);
  }
};
export const approvePost = async (req, res) => {
  try {
    const id = req.params.id;
    await PostModel.updateOne({ _id: id }, { $set: { approved: true } });
    res.status(200).json("success!");
  } catch (e) {
    res.status(400).json(e);
  }
};
