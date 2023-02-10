import {useState} from 'react'




export default function Emp(){
    
    // State function 
const[empdata,setEmpData]=useState({empName:'Sam',password:'123',isVisible:false})

const handleNameChange=(e)=>{
        setEmpData(Object.assign({},empdata,{empName:e.target.value,isVisible:false}))
    }
const handlePasswordChange=(e)=>{
    setEmpData(Object.assign({},empdata,{password:e.target.value,isVisible:false}))
    


}
const showData=()=>{
    setEmpData(Object.assign({},empdata,{isVisible:true}))

}

return (<div> 
    <label>Please enter your name <input onChange={handleNameChange} /> </label>
    <br/>
    <label>Please enter your password <input onChange={handlePasswordChange} /> </label>
    <br/>
    
    <button onClick={showData}>Show result</button>
    {empdata.isVisible?<h1>name is {empdata.empName} and password is {empdata.password}</h1>:null}
    
</div>)

}