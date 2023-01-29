import React, {useState, createContext} from "react";

export const TeamDetailsContext = createContext();

export const TeamDetailsContextProvider = (props) => {
    const [teamDetail, setTeamDetails] = useState([]);
    return(
        <TeamDetailsContext.Provider value = {{teamDetail, setTeamDetails}}>
            {props.children}
        </TeamDetailsContext.Provider>
    );

};