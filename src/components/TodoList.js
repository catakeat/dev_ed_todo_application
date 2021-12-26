import React from "react";
import Todo from './Todo'

const TodoList = ({todos,setTodos,filteredTodos}) => {
  return (
    <div className="todo-container">
      <div className="todo-list">
        <ul>
            {filteredTodos.map((todo)=><Todo todos={todos} key={todo.id} text={todo.text} completed={todo.completed} id={todo.id} setTodos={setTodos}/>)}
         
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
