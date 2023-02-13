
import React from 'react'
import CreateRecord from './CreateRecord';



export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={data:[]}
    

  }
  getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(res => this.setState({data:res}))
  }
  getUser=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/' + this.state.user)
    .then(res => res.json())
    .then(res => this.setState({data:res}))
  }

  captureId=(e)=>{
    this.setState({...this.state,user: e.target.value})

  }
  

  render(){
    return(<div>
      <button onClick={this.getData}>Click</button>
      <label>Enter the id to fetch<input onChange={this.captureId} /></label>
      <button onClick={this.getUser}> Show result</button>
      <h4>{JSON.stringify(this.state.data)}</h4>


      <CreateRecord/>
    </div>)
  }
}
