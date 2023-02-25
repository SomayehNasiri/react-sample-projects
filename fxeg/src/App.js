import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

function App() {

  const[data,setData]=useState([])
  const [date,setDate]=useState()
  const [counter,setCounter]=useState(1)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/'+counter)
    .then(res=>res.json())
    .then(res=>setData(res))
  },[date])
const handleClick=()=>{
  setCounter(counter+1)
  setDate(new Date())
}
  return (

    <div className="App">
      <button onClick={handleClick}>
        Click
      </button>
      <h2>{JSON.stringify(data)}</h2>
      <h2>{JSON.stringify(date)}</h2>

    </div>
  );
}

export default App;
