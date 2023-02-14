import React from 'react'
import Table from './Table';


export default class App extends React.Component{
constructor(props){
  super(props);
  this.state={data:[],selectedRow:{}}
}

handleRowClick=(row)=>{
 
  this.setState({...this.state,selectedRow:row})
}

handleData=()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
     .then(res => res.json())
     .then(res => this.setState({...this.state,data:res}))
    // .then(res => this.setState({data:res})) 
}

render(){
  return(<div>
    <button onClick={this.handleData}>Click here</button>
    <Table data={this.state.data}  handleRowClick={this.handleRowClick}  row={this.state.selectedRow}/>
  </div>)
}

}