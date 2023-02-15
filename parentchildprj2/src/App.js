import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Table from './Table';


function App() {
  const [data,setData]=useState([])
  const [row1,setRow]=useState({})

const handleClick=()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
   .then(res => res.json())
   .then(res => setData(res))
}
const handleRowClick=(row1)=>{
 
  setRow(row1)
}


  return (

    <div className="App">

    <button onClick={handleClick}>Click to get data</button>
    <Table data={data}  handleRowClick={handleRowClick}  row={row1}/>

    </div>
  );
}

export default App;
