const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '"name" is required field'],
    trim: true,
    maxLength: [30, '"name" can not be more that 30 characters']
  },
  completed: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('Task', TaskSchema);
