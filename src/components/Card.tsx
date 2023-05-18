import React from 'react';
import back from '../assets/CardBack.png';
import front1 from '../assets/Card1.png';
import front2 from '../assets/Card2.png';
import front3 from '../assets/Card3.png';
import front4 from '../assets/Card4.png';
import front5 from '../assets/Card5.png';
import front6 from '../assets/Card6.png';
import front7 from '../assets/Card7.png';
import front8 from '../assets/Card8.png';

import './Card.css'

function getCard(number: number) {
    switch (number) {
        case 1:
            return front1;
        case 2:
            return front2;
        case 3:
            return front3;
        case 4:
            return front4;
        case 5:
            return front5;
        case 6:
            return front6;
        case 7:
            return front7;
        case 8:
            return front8;
    }
}

function Card(props: {
    number: number,
    flipped?: boolean,
    onClick: (e: any) => void
}) {
    return <div className="Card__Container">
        {!props.flipped ?
            <img
                className="Card__Back"
                src={back}
                onClick={props.onClick}
            />
            :
            <img
                className="Card__Front"
                src={getCard(props.number)}
            />
        }   
        </div>
}

export default Card;