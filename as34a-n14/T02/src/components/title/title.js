import React from 'react'
import './title.css'

const Title = (props) => {
    return props.color == 'true' ? <h2 className="title white">{props.value}</h2> : <h2 className="title black">{props.value}</h2>
}

export default Title