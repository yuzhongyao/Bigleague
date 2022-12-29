import React from "react";
import {Routes, Route} from "react-router-dom";
import Players from "./routes/Players";
import Teams from "./routes/Teams";
import PlayerDetails from "./routes/PlayerDetails";
import TeamDetails from "./routes/TeamDetails";
import Home from "./routes/Home";
import { TeamsContextProvider } from "./context/TeamsContext";
import { PlayersContextProvider } from "./context/PlayersContext";



const App = () => {
    return <div>
        <TeamsContextProvider>
        <PlayersContextProvider>
            <Routes>         
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/players" element={<Players/>}/>
                <Route exact path="/teams" element={<Teams/>}/>
                <Route exact path="/players/:playerid" element={<PlayerDetails/>}/>
                <Route exact path="/teams/:teamid" element={<TeamDetails/>}/>
             </Routes>
        </PlayersContextProvider>
        </TeamsContextProvider>
        
    </div>;
};

export default App;