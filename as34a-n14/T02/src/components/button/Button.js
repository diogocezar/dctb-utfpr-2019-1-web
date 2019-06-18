import React from 'react'
import './Button.css'

const Button = (props) => {
    return props.color == 'false' ? <a target="_blank" href={props.content} className="link"><button id="botao">{props.value}</button></a> : <a target="_blank" href={props.content} className="link"><button id="botao-white">{props.value}</button></a>
}

export default Button