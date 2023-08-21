const isEmpty = require('lodash/isEmpty');
const Task = require('../models/Tasks');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOne({ '_id': id });

    if (!task) {
      return res.status(404).json({ error: `No task with id: ${id}` })
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;

    if (isEmpty(req.body)) {
      return res.status(400).json({ error: "Empty request body" });
    }

    const task = await Task.findOneAndUpdate({ '_id': id }, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndDelete({ '_id': id });

    if (!task) {
      return res.status(404).json({ error: `No task with id: ${id}` })
    }

    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
