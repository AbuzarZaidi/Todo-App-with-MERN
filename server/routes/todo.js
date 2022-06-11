const express=require("express");
const  {readTodos,createTodo,deleteTodo,updateTodo}= require( '../controllers/todo');
const router=express.Router();
router.delete('/:id',deleteTodo)
router.patch('/:id',updateTodo)
router.get('/',readTodos)
router.post('/',createTodo)
module.exports=router;