import React from 'react'
import './Card.css';
const Card = (props) => {
    return (
        <div className="Card" style={{width: props.style? props.style.width:'100%'}} {...props}>
         {props.children}   
        </div>
    )
}

export default Card;
