import React from 'react';
import Footer from '../components/Footer';
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
                <Footer/>
            </div>);
};

export default Players;