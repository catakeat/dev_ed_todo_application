import React from "react";
import Todo from './Todo'

const TodoList = ({todos,setTodos}) => {
  return (
    <div className="todo-container">
      <div className="todo-list">
        <ul>
            {todos.map((todo)=><Todo todos={todos} key={todo.id} text={todo.text} completed={todo.completed} id={todo.id} setTodos={setTodos}/>)}
         
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
