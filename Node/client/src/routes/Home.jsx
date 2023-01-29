import React from 'react';
import Footer from '../components/inAllPages/Footer';
import Header from "../components/inAllPages/Header";
import Navbar from "../components/Navbar";
import Schedule from '../components/Schedule';

const Home = () => {
    return (
    <div>
        <div className='row'>
            <div className='col'><Header/></div>
            <div className='col'><Navbar/></div>
        </div>
        <Schedule/>
        <Footer/>
    </div>
    );
};

export default Home;