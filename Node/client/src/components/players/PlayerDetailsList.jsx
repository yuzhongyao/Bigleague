import React from "react";
import Header from "../inAllPages/Header";
import Navbar from "../Navbar";
import PlayerCareerStats from "./PlayerCareerStats";
import PlayerGames from "./PlayerGames";



const PlayerDetailsList =(props) => {

    return(
        
        <div className="container">
        
            <PlayerCareerStats/>
            <PlayerGames/>
        </div>
        
    )

};

export default PlayerDetailsList;