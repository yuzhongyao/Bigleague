import React from 'react';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RulesRegulations from "../components/RulesRegulations";

const Info = () => {
    return (
    <div>
        <div className='row'>
            <div className='col'><Header/></div>
            <div className='col'><Navbar/></div>
        </div>

        <div>
            <RulesRegulations/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    );
};

export default Info;