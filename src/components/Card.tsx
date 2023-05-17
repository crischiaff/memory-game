import React from 'react';
import back from '../assets/CardBack.png';
import './Card.css'

function Card() {
    return <div className="Card__Container">
        <img src={back}/>
        </div>
}

export default Card;