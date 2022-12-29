import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
    <div>
        <div className='row'>
            <div className='col'><Header/></div>
            <div className='col'><Navbar/></div>
        </div>
        
    </div>
    );
};

export default Home;