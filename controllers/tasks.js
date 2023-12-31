const isEmpty = require('lodash/isEmpty');
const Task = require('../models/Tasks');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (_, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
})

const getTask = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findOne({ '_id': id });

  if (!task) {
    return next(createCustomError(`Not found task with id: ${id}`, 404));
  }

  res.status(200).json({ task });
})

const updateTask = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;

  if (isEmpty(req.body)) {
    return next(createCustomError(`Empty request body`, 400));
  }

  const task = await Task.findOneAndUpdate({ '_id': id }, req.body, {
    new: true,
    runValidators: true
  });

  if (!task) {
    return next(createCustomError(`Not found task with id: ${id}`, 404));
  }

  res.status(200).json({ task });
})

const deleteTask = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findOneAndDelete({ '_id': id });

  if (!task) {
    return next(createCustomError(`Not found task with id: ${id}`, 404));
  }

  res.status(200).send();
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
