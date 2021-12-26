import "./App.css";
import TodoList from "./components/TodoList";
import Formular from "./components/Formular";
import { useState,useEffect } from "react";
function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = () => {
    switch (status) {
      case "completed": setFilteredTodos(todos.map(todo => todo.completed === true))
        break;
      case "uncompleted": setFilteredTodos(todos.map(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  useEffect(()=>{
      filterHandler()
     //console.log("Hey")

  },[todos,status])
  
  return (
    <div className="App">
      <header>
        <h1>Hello React </h1>
        <Formular
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
          filterHandler = {filterHandler}
        />

      </header>

      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>

    </div>
  );
}

export default App;
