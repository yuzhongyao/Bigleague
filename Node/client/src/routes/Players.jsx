import React from 'react';
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import PlayersList from '../components/PlayersList';

const Players = () => {
    return (<div>
                 <div className='row'>
                    <div className='col'><Header/></div>
                    <div className='col'><Navbar/></div>
                </div>
                <PlayersList/>
            </div>);
};

export default Players;