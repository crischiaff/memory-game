import React, { useState } from 'react';
import ButtonLink from '../components/ButtonLink';
import './level.css';
import Card from '../components/Card';

interface Card {

}

function Level() {

    const [score, setScore] = useState(0);

    return (
        <div className="Level__Container">
            <div className="Level__TopBar">
                <ButtonLink to="/">BACK TO HOME</ButtonLink>
                <div className="Level__Score">
                    SCORE: {score}
                </div>
            </div>
            <div className="Level__Content">
                <div className="Level__CardsContent">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
        );
}

export default Level;