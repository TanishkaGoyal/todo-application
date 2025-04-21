const Task = require('../models/task');

exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
};

exports.addTask = async (req, res) => {
    const newTask = new Task({ ...req.body, userId: req.userId });
    await newTask.save();
    res.status(201).json(newTask);
};

exports.updateTask = async (req, res) => {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
};
