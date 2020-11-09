const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const categorySchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  algos: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        approved: {
          type: Boolean,
          default: false,
        },
      },
    ],
    required: true,
  },
});

module.exports.User = mongoose.model("User", userSchema);
module.exports.Category = mongoose.model("Category", categorySchema);
