import {useState} from 'react';
import './App.css';
import Emp from './Emp';

function App() { 
  //hook
  const [counter,setCounter]= useState(10);
  const increament=()=>{
    setCounter(counter+1)
  }
  const deccreament=()=>{
    setCounter(counter-1)
  }
  return (
    <div className="App">
      <Emp/>
      <header className="App-header">
      <button onClick={increament}>Increament</button> 
      <button onClick={deccreament}>Decrement</button> 
      <h1>counter is {counter}</h1>    
      </header>

    </div>
  );
}

export default App;
