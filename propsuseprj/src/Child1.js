
import React from 'react'
import GrandChild from './GrandChild'

export default function Child1 (props){
return(<div>
    <h2>I am child 1</h2>
    <GrandChild xx={props.param} yy={props.data}/>
</div>)

}