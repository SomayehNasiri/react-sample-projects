
//import {createElement} from "react";
import React from "react";

const FormInput=({type,placeholder})=>(
    <div className="form-field-holder">
        <input type={type} placeholder={placeholder}/>
    </div>
);
const LoginButton = ({clicked}) => (
    <div className="form-field-holder">
        <button onClick={clicked}>Login</button>
    </div>
);
function handleClick(){
    alert("Alakiiii **")
}
const LoginComponent=() => {
    
    //// A function creates lement it is replaced with JSX code below
    // return createElement("div",
    // {className:"login-component"},
    // "Hello");

    return <div className="login-component">
        <span id="title">Login to your account</span>
        <FormInput type="type" placeholder="Email"/>
        <FormInput type="password" placeholder="Psssword" />
        <LoginButton clicked={handleClick} />
        {/* <LoginButton clicked={()=> alert("Login now!")} /> */}

    </div>

};


export default LoginComponent;

