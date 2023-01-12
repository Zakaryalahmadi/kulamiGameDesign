import * as React from 'react';
import GameModes from './gameModes';
import NavBar from './navBar';
import './styles/home.scss'


const Home: React.FunctionComponent = (props) => {
    return <>
        <div className="Home">
            <NavBar />
            
            <GameModes />
        </div>
    </>;
};

export default Home;
