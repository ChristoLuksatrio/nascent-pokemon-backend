import mongoose from "mongoose";
const Schema = mongoose.Schema;
const submissionSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pokemon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Submission = mongoose.model("submission", submissionSchema);
export default Submission;
