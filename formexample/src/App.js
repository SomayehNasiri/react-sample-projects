import logo from './logo.svg';
import './App.css';
import DropDown from './DropDown';
import {useState,useEffect} from "react"

function App() {
const [todo,setTodo]=useState()
const [toDoData,setTodoData]=useState({})
const range=Array.from(Array(100).keys())
const [toDoIds,setToDoIds]=useState([])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(res => res.json())
  .then(res => setToDoIds(res))
})
const handleChange=(e)=>{
  setTodo(e.target.value)
  fetch('https://jsonplaceholder.typicode.com/todos/'+e.target.value)
   .then(res => res.json())
   .then(res => setTodoData(res))

}
  return (
    <div className="App">
      <label>Select a number</label>
      <DropDown handleChange={handleChange}
      toDoData={toDoData}
      toDoIds={toDoIds}
      todo={todo} range={range} />
      <h1>You Selected {todo}</h1>
      <h2> data fetched {JSON.stringify(toDoData)}</h2>
    </div>
  );
}

export default App;
