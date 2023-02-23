import {useState} from 'react'

export default function DropDown(props){

    
    return (
        <div>
            <select onChange={props.handleChange}>
             {/* {props.range.map(data=> (<option value={data}>{data}</option>))} */}
             {props.toDoIds.map(data=> (<option value={data.id}>{data.id}</option>))}

            </select>
            <p>{JSON.stringify(props.toDoData)}</p>
        </div>
    )



}