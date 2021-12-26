import "./App.css";
import TodoList from "./components/TodoList";
import Formular from "./components/Formular";
import { useState } from "react";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus]=useState("all")
  


  return (
    <div className="App">
      <header>
        <h1>Hello React </h1>
        <Formular
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
       
      </header>
     
        <TodoList todos={todos}  setTodos={setTodos}/>
 
    </div>
  );
}

export default App;
