import React from 'react';
import {
    Link,
  } from "react-router-dom";
import ButtonLink from '../components/ButtonLink';
import Panel from '../components/Panel';
function Home() {
    return (
            <Panel centered>
                
                home<br/>
                <ButtonLink to="/level">Start game</ButtonLink>
                <ButtonLink to="/leaderboard">Leaderboard</ButtonLink>
            
            </Panel>
        );
}

export default Home;