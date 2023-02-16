import {useState} from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CodeInput=({onSet}) =>{
    const[code,setCode]=useState();
    const onSetCode=val => {
        setCode(val);
        onSet(val);
    }
    return(
        <div>
            {/* <input value={code} onChange={e =>onSet ( e.target.value)}></input> */}
            <TextField id="outlined-basic" label="" variant="outlined"  
            value={code} onChange={e =>onSetCode ( e.target.value)}/>
           
            <Button variant="outlined"  onClick={()=>onSetCode(parseInt(Math.random()*new Date().getTime()))}>Generate</Button>
        </div>
    )
};
export default CodeInput;