const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    status: { type: String,},
    created_at: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;