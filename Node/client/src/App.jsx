import React from "react";
import {Routes, Route} from "react-router-dom";
import Players from "./routes/Players";
import Teams from "./routes/Teams";
import PlayerDetails from "./routes/PlayerDetails";
import TeamDetails from "./routes/TeamDetails";
import GameDetails from "./routes/GameDetails";
import Home from "./routes/Home";
import Games from "./routes/Games"
import { TeamsContextProvider } from "./context/TeamsContext";
import { PlayersContextProvider } from "./context/PlayersContext";
import Info from "./routes/Info";
import { GamesContextProvider } from "./context/GamesContext";
import "./App.css";
import { TeamDetailsContextProvider } from "./context/TeamDetailsContext";


const App = () => {
    return <div>
        <TeamsContextProvider>
        <PlayersContextProvider>
        <GamesContextProvider>
            <Routes>         
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/info" element={<Info/>}/>
                <Route exact path="/games" element={<Games/>}/>
                <Route exact path="/players" element={<Players/>}/>
                <Route exact path="/teams" element={<Teams/>}/>
                <Route exact path="/players/:playerid" element={<PlayerDetails/>}/>
                <Route exact path="/teams/:teamid" element={<TeamDetails/>}/>
                <Route exact path="/games/:gameid" element={<GameDetails/>}/>
            </Routes>
       
        </GamesContextProvider>
        </PlayersContextProvider>
        </TeamsContextProvider>
        
        
    </div>;
};

export default App;