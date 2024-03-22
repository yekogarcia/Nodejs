const tasks = require("../models/taskModel");
const { bodyParser } = require("../lib/bodyParser");

const getTasks = async (req, res) => {
  return await tasks.get();
};

const createTasks = async (req, res) => {
  await bodyParser(req);
  return await tasks.create(req.body);
};

const updateTask = async (req, id) => {
  await bodyParser(req);
  return await tasks.update(req.body, id);
};

const deleteTask = async (id) => {
  return await tasks.deleteRow(id);
};

module.exports = {
  getTasks,
  createTasks,
  updateTask,
  deleteTask,
};
