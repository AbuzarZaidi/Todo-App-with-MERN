const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  Todo:  {type:String,required:true}, // String is shorthand for {type: String}
  completed:  {type:Boolean,default:false}
});

const TodoModel = mongoose.model('Todo', todoSchema);
module.exports=TodoModel;