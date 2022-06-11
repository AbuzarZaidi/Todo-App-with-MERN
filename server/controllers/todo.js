const mongoose = require("mongoose");
const TodoModel = require("../models/todos");
exports.deleteTodo = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await TodoModel.findByIdAndRemove(_id);
    if (!_id) {
      return res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.readTodos = async (req, res) => {
  try {
    const todo = await TodoModel.find();
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.createTodo = async (req, res) => {
  try {
    const todo = new TodoModel(req.body);
    const data = await todo.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.updateTodo =async(req,res)=>{
  try {
    const _id = req.params.id;
    const data = await TodoModel. findByIdAndUpdate(_id, {completed:true})
    if (!_id) {
      return res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send(error);
  }
  }