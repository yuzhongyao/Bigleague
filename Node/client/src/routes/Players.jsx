import React from 'react';
import Footer from '../components/inAllPages/Footer';
import Navbar from '../components/Navbar';
import PlayersList from '../components/players/PlayersList';

const Players = () => {
    return (<div>
                 <div className='row'>
                    
                    <div className='col'><Navbar/></div>
                </div>
                <PlayersList/>
                <Footer/>
            </div>);
};

export default Players;
