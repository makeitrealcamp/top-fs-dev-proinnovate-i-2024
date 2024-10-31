const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String
  },
}, {
  versionKey: false,
  timestamps: true
})

const TaskModel = mongoose.model('Task', TaskSchema)

module.exports = TaskModel;
