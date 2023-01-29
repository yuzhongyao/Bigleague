import React from 'react';
import Header from "../components/inAllPages/Header";
import Navbar from '../components/Navbar';
import TeamsList from "../components/teams/TeamsList";
import Footer from "../components/inAllPages/Footer";

const Teams = () => {
    return (<div>
        <div className='row'>
            <div className='col'><Header/></div>
            <div className='col'><Navbar/></div>
        </div>
        <TeamsList/>
        <Footer/>
    </div>);
};

export default Teams;