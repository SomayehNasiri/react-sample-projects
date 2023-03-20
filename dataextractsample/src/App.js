import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [t,setT]=useState("")
  const [c,setC]=useState(false)

  const [toDoId,setToDoId]=useState("")

  const handleClick=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/'+ toDoId)
    .then(res=>res.json())
    .then(res=>{
      const {title,completed}=res
      setT(title)
      setC(completed)
    })
  }

  const handleChange=(e)=> setToDoId(e.target.value)
  return(<div>
 <label>Enter Id <input onChange={handleChange} /></label>
<button  onClick={handleClick}>Click to load</button>
<h3>title is : {t}</h3>
<h3>Status is : {c?"true":"false"}</h3>

  </div>)
}

export default App;
