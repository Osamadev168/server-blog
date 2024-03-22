import mongoose from "mongoose";

const DraftSchema = new mongoose.Schema({
    image: {
        type: String,
      },
      author: {
        type: String,
      },
      authorImage: {
        type: String,
      },
      authorId: {
        type: String,
      },
      title: {
        type: String,
      },
      body: {
        type: String,
      },
      category: {
        type: String,
      },
      CreatedAt: {
        type: Date,
      },
      description: {
        type: String,
      },
      comments: [
        {
          authorid: {
            type: String,
          },
          username: {
            type: String,
          },
          userimage: {
            type: String,
          },
          comment: {
            type: String,
          },
          date: {
            type: Date,
          },
        },
      ],
      tags: [{ type: String }],
      commentslength: {
        type: Number,
      },
      views: {
        type: Number,
      },
      approved: {
        type: Boolean,
      },
      updatedAt  : {
    
       type : Date
    
      }
    });
const DraftModel = mongoose.model("drafts", DraftSchema);
export default DraftModel;