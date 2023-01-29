import React from 'react';
import Header from "../components/inAllPages/Header";
import Navbar from '../components/Navbar';
import PlayerDetailsList from '../components/players/PlayerDetailsList';

const PlayerDetails = () => {
    return (<div>
                <div className='row'>
                    <div className='col'><Header/></div>
                    <div className='col'><Navbar/></div>
                </div>

                <div>
                    <PlayerDetailsList/>
                </div>
    </div>);
};

export default PlayerDetails;