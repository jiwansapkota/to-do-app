import './App.css';
import Headers from "./components/header";
import Card from "./components/card"
import Todos from './Todos';
import { useState } from 'react';
// import { Button } from 'bootstrap';

function App() {

  const[todos, setTodos] = useState([
  ]);

  console.log(todos);

  return (
    <div className="App">
      <Headers></Headers>
      <Card todos={todos} setTodos = {setTodos}/>
     <Todos todos = {todos} setTodos = {setTodos}/>
   </div>
  );
}

export default App;
