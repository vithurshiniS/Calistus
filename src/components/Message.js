import { Component } from "react";
import React from 'react';

const name = "Vithu";

function Message(props){
    console.log(props)
    return <h1>Name: {props.name}</h1>
}

export default Message