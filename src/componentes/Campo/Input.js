import React from 'react';
import './Input.css'

function Input(props){
    return(
    <input 
    className='caixa-texto'
    type={props.type}
    id={props.id}
    name={props.name}
    placeholder={props.placeholder}
    />
    )
}

export default Input