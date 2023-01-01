import React from 'react';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import GamesList from "../components/GamesList";

const Games = () => {
    return (<div>
                 <div className='row'>
                    <div className='col'><Header/></div>
                    <div className='col'><Navbar/></div>
                </div>
                <GamesList/>
                <Footer/>
            </div>);
};

export default Games;