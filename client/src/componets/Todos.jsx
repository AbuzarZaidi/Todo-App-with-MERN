import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Todo from "./Todo";
import "./Todos.css";
const { createTodo, readTodos ,deleteTodo,updateTodo} =require( "../functions/index")
const Todos = () => {
  const [todo, setTodo] = useState({
    Todo: "",
    checkbox: false,
  });
  const [todos, setTodos] = useState(null);
  const [currentId, setCurrentId] = useState(0);
  const clearData = () => {
    setCurrentId(0);
    setTodo({ Todo: "", checkbox: false });
  };
  useEffect(() => {
    let currentTodo=currentId!==0?todos.find(todo=>todo._id===currentId):{title:"",content:""}
    setTodo(currentTodo);
  }, [currentId])
  useEffect(() => {
    const fetchData = async () => {
      const result = await readTodos();
      setTodos(result);
    };
    fetchData();
    clearData();
  }, [setTodos,currentId]);

  

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (currentId === 0 &&todo.Todo.length>0) {
      const result = await createTodo(todo);
      setTodos([...todos, result]);
      clearData();
    }
  };
  const removeTodoHandler=async(id)=>{
    await deleteTodo(id);
    const result = await readTodos();
    setTodos(result);
      }
      const completeHandler=async(id)=>{
        await updateTodo(id);
        const result = await readTodos();
    setTodos(result);
         }
  return (
    <>
      <div className="centerInput">
        <input
        placeholder="Add Todo"
          type="text"
          id="inputTodo"
          value={todo.Todo}
          onChange={(e) => setTodo({ ...todo, Todo: e.target.value })}
        />
        <Tooltip title="Add ToDo">
          <button id="addButton" onClick={onSubmitHandler}>
            +
          </button>
        </Tooltip>
      </div>
      <br />
      <div>
        <ul className="list-group list-group-numbered" id="showTodos">
          {todos !== null
            ? todos.map((arrEle,ind) => {
                return <Todo key={ind} todos={arrEle} completeTodo={completeHandler}   deleteTodo={removeTodoHandler}/>;
              })
            : ""}
        </ul>
      </div>
    </>
  );
};
// return( <Todo todos={arrEle} completeTodo={completeHandler} deleteTodo={deleteHandler} id={index} key={index} />)
export default Todos;
