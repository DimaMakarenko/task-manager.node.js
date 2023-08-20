const Task = require('../models/Tasks');

const getAllTasks = (req, res) => {
  res.send('All items');
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const getTask = (req, res) => {
  res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
  res.send('update task');
}

const deleteTask = (req, res) => {
  res.send('delete task');
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
