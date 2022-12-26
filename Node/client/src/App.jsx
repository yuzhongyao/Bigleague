import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Players from "./routes/Players";
import Teams from "./routes/Teams";
import PlayerDetails from "./routes/PlayerDetails";
import TeamDetails from "./routes/TeamDetails";




const App = () => {
    return <div>App
        <BrowserRouter>
            <Routes> 
                      
                    <Route exact path="/" element={<App/>}/>
                    <Route exact path="players" element={<Players/>}/>
                    <Route exact path="/teams" element={<Teams/>}/>
                    <Route exact path="/players/:playerid" element={<PlayerDetails/>}/>
                    <Route exact path="/Teams/:teamid" element={<TeamDetails/>}/>
                 
             </Routes>
        </BrowserRouter>
    </div>;
};

export default App;