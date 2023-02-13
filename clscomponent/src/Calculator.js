import React from 'react'

export default class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state={n1:0,n2:0,result:0}
    }

    add=()=>{
        this.setState({result:this.state.n1+this.state.n2})
    }
    multiply=()=>{
        this.setState({result:this.state.n1*this.state.n2})
    }

    subtract=()=>{
        this.setState({result:this.state.n1-this.state.n2})
    }
    divide=()=>{
        this.setState({result:this.state.n1/this.state.n2})
    }
    capturen1=(e)=>{

        this.setState({...this.state,n1:parseInt( e.target.value)})
    }
    capturen2=(e)=>{

        this.setState({...this.state,n2:parseInt( e.target.value)})
    }
    render (){
        return (<div>
            <label>No1:<input  type='text' onChange={this.capturen1}/></label>
            <br/>
            <label>No2:<input  type='text' onChange={this.capturen2} /></label>
            <br/>
            <button onClick={this.add}>+</button>
            <button onClick={this.multiply}>*</button>
            <button onClick={this.subtract}>-</button>
            <button onClick={this.divide}>/</button>

           <h1> Result: {this.state.result}</h1> 




        </div>)
    }
}