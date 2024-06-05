import mongoose from "mongoose";

const sitSchema = new mongoose.Schema({
  project: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  targetData: {
    type: Date,
    required: true,
  },
  person: {
    type: String,
    required: true,
  },
  correction: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});
export const SiteModel = mongoose.model("sites", sitSchema);
export default SiteModel;
