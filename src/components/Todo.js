import React from "react";

function Todo(props) {

 const deleteHandler = (e)=>{
    
     let new_todos = props.todos.filter( todo=> { return todo.id !== props.id }  )
      props.setTodos(new_todos)

 }

 const completeHandler = ()=>{
       props.setTodos(props.todos.map( todo=>{ 
        if(todo.id == props.id){
             //alert(JSON.stringify({...todo,completed :!props.completed })) 
             return {...todo,completed :!props.completed }
            }
  else return todo;
     //   props.setTodos(new_todos)
 }))
}
  return (
    <div className="todo">
      <li className="{ todo-item  completed ? completed : }"  >{props.text}</li>
      <button className="complete-btn"  onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn"  onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
