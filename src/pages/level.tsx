import React, { useState, useEffect } from 'react';
import ButtonLink from '../components/ButtonLink';
import './level.css';
import Card from '../components/Card';

interface Card {
    number: number,
    flipped: boolean
}

enum GameStatus {
    SELECT_FIRST_CARD,
    SELECT_SECOND_CARD,
    GAME_COMPLETE
}

function Level() {

    const [score, setScore] = useState<number>(0);
    const [cards, setCards] = useState<Card[]>([]);
    const [status, setStatus] = useState<GameStatus>()

    useEffect(() => {
        start()
    }, [])

    const start = () => {
        setScore(0)
        setStatus(GameStatus.SELECT_FIRST_CARD)
        let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
        numbers = numbers.sort(() => 0.5 - Math.random());
        const tempCards: Card[] = [];
        for (const index in numbers) {
            tempCards.push({
                number: numbers[index],
                flipped: false
            })
        }

        setCards(tempCards)
    }

    const onClickCard = (index: number) => {
        const clickedCard = cards[index];
        if (!clickedCard.flipped) {
            cards[index].flipped = true;

            setCards([...cards]);
        }

        // TODO check for game finish
    }

    return (
        <div className="Level__Container">
            <div className="Level__TopBar">
                <div style={{display: 'flex'}}>
                <ButtonLink to="/">BACK TO HOME</ButtonLink>
                {/* TODO Create a Button component */}
                <ButtonLink onClick={start} to="/level">RESTART</ButtonLink>
                </div>
                <div className="Level__Score">
                    SCORE: {score}
                </div>
            </div>
            <div className="Level__Content">
                <div className="Level__CardsContent">
                    {
                        cards.map((card, index) => <Card
                            key={index}
                            flipped={card.flipped}
                            number={card.number}
                            onClick={(e) => {
                                onClickCard(index)
                            }}
                        />)
                    }
                </div>
            </div>
        </div>
        );
}

export default Level;