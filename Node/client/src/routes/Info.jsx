import React from 'react';
import Footer from '../components/inAllPages/Footer';
import Navbar from "../components/Navbar";
import RulesRegulations from "../components/RulesRegulations";

const Info = () => {
    return (
    <div>
        <div className='row'>
            
            <div className='col'><Navbar/></div>
        </div>

        <div>
            <RulesRegulations/>
        </div>
        <div>
           
        </div>
    </div>
    );
};

export default Info;
