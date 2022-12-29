import React from 'react';
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import TeamsList from "../components/TeamsList";

const Teams = () => {
    return (<div>
        <div className='row'>
            <div className='col'><Header/></div>
            <div className='col'><Navbar/></div>
        </div>
        <TeamsList/>
    </div>);
};

export default Teams;