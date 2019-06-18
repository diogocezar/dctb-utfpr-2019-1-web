import React from 'react'
import './footer.css'

const Footer = (props) => {
    return (
        <div className="footer bg-dark">
            <p className="feet">{props.name}</p>
            <p className="feet">{props.email}</p>
            <p className="feet">{props.number}</p>
        </div>
    );
}

export default Footer