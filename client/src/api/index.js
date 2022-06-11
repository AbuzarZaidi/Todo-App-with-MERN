import axios from 'axios'
const url='http://localhost:5000/todo'
export const readTodos=()=>axios.get(url);
export const createTodo=newTodo=>axios.post(url,newTodo);
export const deleteTodo=(id)=>axios.delete(`${url}/${id}`);
export const updateTodo=(id)=>axios.patch(`${url}/${id}`);
