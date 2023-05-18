import React from 'react';
import ButtonLink from '../components/ButtonLink';
import Panel from '../components/Panel';
import TextInput from '../components/TextInput';
import './home.css'
import useUserStore from '../stores/userStore';

function Home() {

    const name = useUserStore(
        (state: any) => state.name
    )


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
                    value={name}
                    onChange={(e) => {
                        useUserStore.setState({name: e.target.value})
                    }}
                />
                <ButtonLink to="/level">Start game</ButtonLink>
                <ButtonLink to="/leaderboard" disabled>Leaderboard</ButtonLink>
            
            </Panel>
        </div>
           
        );
}

export default Home;