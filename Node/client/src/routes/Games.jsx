import React from 'react';
import Footer from '../components/inAllPages/Footer';
import Navbar from '../components/Navbar';
import GamesList from "../components/games/GamesList";

const Games = () => {
    return (<div>
                 <div className='row'>
                    
                    <div className='col'><Navbar/></div>
                </div>
                <GamesList/>
                <Footer/>
            </div>);
};

export default Games;
