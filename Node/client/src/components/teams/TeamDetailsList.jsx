import React, {useEffect} from "react";
import { useContext } from "react";
import League from "../../apis/League";
import { TeamDetailsContext, TeamDetailsContextProvider } from "../../context/TeamDetailsContext";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { TeamDetailsStatsContext } from "../../context/TeamDetailsStatsContext";
import Roster from "./Roster.jsx";
import TeamDetailsGames from "./TeamDetailsGames";
import { RosterContextProvider } from "../../context/RosterContext";

function ChangeTab(){

}


const TeamDetailsList = (props) =>{
    let navigate = useNavigate();
    let p = useParams();
    
    // const {teamDetail, setTeamDetails} = useContext(TeamDetailsContext);
    // useEffect( () => {
    //     //define async function inside useEffect() and call to prevent
    //     //error
    //     const fetchData = async () => {
    //         try {
    //             const response = await League.get("/teams/" + p.teamid);
    //             console.log(response);
    //             setTeamDetails(response.data.data.team);
            
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
       
    //     fetchData();
    // },[]);

    // const {teamDetailStats, setTeamDetailsStats} = useContext(TeamDetailsStatsContext);
    // useEffect( () => {
    //     const fetchDataStats = async () => {
    //         try {
    //             const response = await League.get("/teams/" + p.teamid);
    //             console.log(response);
    //             setTeamDetailsStats(response.data.data.team);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     fetchDataStats();
    // },[]);

    return(

        
        <div className="container">
            <div className="tab">
                <button className="tablinks" onClick={ChangeTab()}>Roster</button>
                <button className="tablinks" onClick={ChangeTab()}>Games</button>
            </div>
            <div>   
                <Roster/>
            </div>
            <div>
                <TeamDetailsGames/>
            </div>
            

                    
            </div>
        

    );
};

export default TeamDetailsList;