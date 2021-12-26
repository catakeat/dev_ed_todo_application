import React, { useState,useEffect } from "react";


const Formular = ({ inputText, todos, setTodos, setInputText ,setStatus ,filterHandler}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler= (e)=>{
    setStatus(e.target.value)
    
  }


  return (
    <form   onSubmit={submitTodoHandler}>
      <input
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" onChange={statusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    
    </form>
  );
};

export default Formular;
