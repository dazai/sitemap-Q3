const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  },
);

export const IssueModel = mongoose.model('Issue', IssueSchema);
