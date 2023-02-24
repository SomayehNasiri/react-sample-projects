import logo from './logo.svg';
import './App.css';
import Checkbox from './CheckboxInput';
import TextInput from './TextInput';
import {useState} from 'react'

function App() {
const [data,setData]=useState({})

const handletextChange=(e)=>{
  setData({...data,name:e.target.value})
}
const handletextChange_age=(e)=>{
  setData({...data,age:e.target.value})
}
  return (
    <div className="App">
     <form>
     
     <TextInput   handletextChange={handletextChange}  
     label="Enter your name"> </TextInput>
       <TextInput   handletextChange={handletextChange_age}  
     label="Enter your age"> </TextInput>
      
     
     </form>
     <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default App;
