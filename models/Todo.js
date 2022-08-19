const mongoose = require('mongoose')

// model schema - even without access to db, we can see whats going in to db
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
