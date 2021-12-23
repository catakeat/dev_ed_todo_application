import './App.css';
import TodoList from  "./components/TodoList"
import Formular from "./components/Formular"

function App() {
  return (
    <div className="App">
<header>
    <h1>Hello React</h1>
    <Formular/>
    <TodoList/>
</header>
    </div>
  );
}

export default App;
