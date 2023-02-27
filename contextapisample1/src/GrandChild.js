

import React from 'react'
import UserContext from './UserContext'


export default function GrandChild(){
const data=React.useContext(UserContext)
    return(
        <div>
            <h4>This is GrandChild</h4>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}