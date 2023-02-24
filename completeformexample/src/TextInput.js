import React from 'react'

export default function TextInput(props){

    return(<div> <label>{props.label}</label> <input type="text" onChange={props.handletextChange}/></div>)
}