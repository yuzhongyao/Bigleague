import React, {useState, createContext} from "react";

export const RosterContext = createContext();

export const RosterContextProvider = (props) => {
    const [roster, setRoster] = useState([]);
    return(
        <RosterContext.Provider value = {{roster, setRoster}}>
            {props.children}
        </RosterContext.Provider>
    );

};