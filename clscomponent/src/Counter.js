import React from 'react';


export default class Counter extends React.Component{
   
   // Thisis equal of the useState 
    constructor (props){
    super(props);
    this.state={counter:0 }
   }
    increament= ()=> {

        //This is equavalent to set state
        this.setState({counter:this.state.counter+1})
    }
   decreament=()=>{
    this.setState({counter:this.state.counter-1})
   }
    render (){

        return( <div>
        <button  onClick={this.increament}>Increament</button>
        
      
        <button onClick={this.decreament}>Decreament</button>
        <br/>
        counter:{this.state.counter}
        
        </div>)
    }
}