import React, {useState, createContext} from "react";

export const PlayersContext = createContext();

export const PlayersContextProvider = (props) => {
    const [players, setPlayers] = useState([]);
    return(
        <PlayersContext.Provider value = {{players, setPlayers}}>
            {props.children}
        </PlayersContext.Provider>
    );

};