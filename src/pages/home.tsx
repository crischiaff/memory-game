import React from 'react';
import {
    Link,
  } from "react-router-dom";
import ButtonLink from '../components/ButtonLink';
import Panel from '../components/Panel';
import TextInput from '../components/TextInput';
import './home.css'
function Home() {
    return (
        
        <div className="Home__Container">
            <img
                src="/Title.png"
                width="600px"
                className="Home__Title"
            />
            <Panel className="Home__Panel">
                
                
                <TextInput
                    label="Inserisci il tuo nome:"
                    value="Paolino"
                    onChange={(e) => {

                    }}
                />
                <ButtonLink to="/level">Start game</ButtonLink>
                <ButtonLink to="/leaderboard">Leaderboard</ButtonLink>
            
            </Panel>
        </div>
           
        );
}

export default Home;