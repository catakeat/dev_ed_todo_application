import './App.css';
import TodoList from  "./components/TodoList"
import Formular from "./components/Formular"
import {useState} from  'react'
function App() {

  const [inputText,setInputText]=useState("")
  const [todos,setTodos] =  useState([])  

  return (
    <div className="App">
<header>
    <h1>Hello React  {inputText}</h1>
    <Formular todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <TodoList/>
</header>
    </div>
  );
}

export default App;
