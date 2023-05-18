import React, { useState, useEffect } from 'react';
import ButtonLink from '../components/ButtonLink';
import './level.css';
import Card from '../components/Card';
import useUserStore from '../stores/userStore';

interface Card {
    number: number,
    flipped: boolean
}

enum GameStatus {
    SELECT_FIRST_CARD,
    SELECT_SECOND_CARD,
    GAME_COMPLETE,
    INACTIVE
}

function Level() {

    const [score, setScore] = useState<number>(0);
    const [cards, setCards] = useState<Card[]>([]);
    const [status, setStatus] = useState<GameStatus>()
    const [selectedCardsIndex, setSelectedCardsIndex] = useState<number[]>([]);

    const name = useUserStore(
        (state: any) => state.name
    )

    useEffect(() => {
        start()
    }, [])

    const start = () => {
        setScore(0)
        setStatus(GameStatus.SELECT_FIRST_CARD)
        setSelectedCardsIndex([])

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

    const unflipSelectedCards = (cardsIndex: number[]) => {
        
        const tempCards = [...cards]
        for (const i in cardsIndex) {
            const currentIndex = cardsIndex[i];
            tempCards[currentIndex].flipped = false;
        }
        setCards([...tempCards]);

        setStatus(GameStatus.SELECT_FIRST_CARD)
    }

    const onClickCard = (index: number) => {
        const clickedCard = cards[index];

        if (status === GameStatus.INACTIVE) {
            return;
        }

        if (!clickedCard.flipped) {
            cards[index].flipped = true;

            setCards([...cards]);
        }

        if (status == GameStatus.SELECT_FIRST_CARD) {

            setSelectedCardsIndex([index])
            setStatus(GameStatus.SELECT_SECOND_CARD)

        } else if (status === GameStatus.SELECT_SECOND_CARD) {

            if (cards[selectedCardsIndex[0]].number === clickedCard.number) {
                setStatus(GameStatus.SELECT_FIRST_CARD)
                setScore(score + 10)
                // HIT
            } else {
                // MISS
                setStatus(GameStatus.INACTIVE)
                setTimeout(()  => {
                    unflipSelectedCards([
                        selectedCardsIndex[0],
                        index
                    ])
                    setScore(score - 5)
                }, 1000)
            }
        }
        

        // check for game finish
        for (const index in cards) {
            const currentCard = cards[index]

            if (!currentCard.flipped) {
                return;
            }
        }

        setStatus(GameStatus.GAME_COMPLETE)
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
            {
                status === GameStatus.GAME_COMPLETE &&
                <div className="Level__Complete">
                    Complimenti {name}, hai vinto!<br/>
                    Il tuo punteggio è {score} punti!<br/>
                    Clicca su restart per ricominciare
                </div>
            }
            
        </div>
        );
}

export default Level;