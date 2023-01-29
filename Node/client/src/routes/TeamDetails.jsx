import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/inAllPages/Footer';
import Header from "../components/inAllPages/Header";
import Navbar from '../components/Navbar';
import TeamDetailsList from '../components/teams/TeamDetailsList';
import { RosterContextProvider } from '../context/RosterContext';
import { TeamDetailsContextProvider } from '../context/TeamDetailsContext';
import { TeamDetailsStatsContext } from '../context/TeamDetailsStatsContext';

const TeamDetails = () => {
    let navigate = useNavigate();
    return (<div>
                <div className='row'>
                    <div className='col'><Header/></div>
                    <div className='col'><Navbar/></div>
                </div>

                <div>
                    <TeamDetailsContextProvider>
                    <RosterContextProvider>
                        <TeamDetailsList/>
                    </RosterContextProvider>
                    </TeamDetailsContextProvider>
                    
                </div>
                <div>
                    <Footer/>
                </div>



    </div>);
};

export default TeamDetails;