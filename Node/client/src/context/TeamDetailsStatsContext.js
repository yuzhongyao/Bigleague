import React, {useState, createContext} from "react";

export const TeamDetailsStatsContext = createContext();

export const TeamDetailsContextProvider = (props) => {
    const [teamDetailStats, setTeamDetailsStats] = useState([]);
    return(
        <TeamDetailsStatsContext.Provider value = {{teamDetailStats, setTeamDetailsStats}}>
            {props.children}
        </TeamDetailsStatsContext.Provider>
    );

};