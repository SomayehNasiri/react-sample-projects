import React from 'react'
import GrandChild from './GrandChild'

export default function Child(){
    return(<div>
        <h3>This is Child</h3>
        <GrandChild></GrandChild>
    </div>)
}