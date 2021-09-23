const mongoose = require("mongoose")


const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  markdown: {
    type: String,
    required: true
  },

})


module.exports = mongoose.model("Articles", articleSchema)