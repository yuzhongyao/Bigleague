
import React, {useEffect} from "react";
import { useContext } from "react";
import League from "../../apis/League";
import { TeamDetailsContext, TeamDetailsContextProvider } from "../../context/TeamDetailsContext";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { TeamDetailsStatsContext } from "../../context/TeamDetailsStatsContext";
import Roster from "./Roster.jsx";


const TeamDetailsGames = (props) =>{
    let navigate = useNavigate();
    let p = useParams();

  const {teamDetail, setTeamDetails} = useContext(TeamDetailsContext);
    useEffect( () => {
        //define async function inside useEffect() and call to prevent
        //error
        const fetchData = async () => {
            try {
                const response = await League.get("/teams/" + p.teamid);
                //console.log(response);
                setTeamDetails(response.data.data.game);
            
            } catch (error) {
                console.log(error);
            }
        }
       
        fetchData();
    },[]);



return(

<div id="Games" className="tabcontent">
                    <div className="list-group">
                    <h2>Games</h2>
                    <table className="table table-hover rounded rounded-4 overflow-hidden">
                        <thead >
                            <tr className="bg-danger text-light">
                                <th scope="col">Away</th>
                                <th scope="col">Away Points</th>
                                <th scope="col">Home</th>
                                <th scope="col">Home Points</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamDetail && teamDetail.map( (team) => {
                                let t = team.date_played;
                                t = t.slice(0,10);
                                return(
                                
                                <tr className="clickable" key ={team.game_id} onClick={()=>navigate(`/games/${team.game_id}`)}>
                                    <td className="clickable" onClick={()=>navigate(`/teams/${team.away_team}`)}>{team.away_name}</td>
                                    <td>{team.away_points}</td>
                                    <td className="clickable" onClick={()=>navigate(`/teams/${team.home_team}`)}>{team.home_name}</td>
                                    <td>{team.home_points}</td>
                                    <td>{t}</td>

                                </tr>


                                
                                );
                            
                            })}
                        </tbody>
                    </table>
                    </div>

                    </div>


)
                        };

export default TeamDetailsGames;



