import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TeamDetailsContext } from "../../context/TeamDetailsContext";
import League from "../../apis/League";
import { RosterContext } from "../../context/RosterContext";

const Roster = (props) =>{
    let navigate = useNavigate();
    let p = useParams();
    
    const {roster, setRoster} = useContext(RosterContext);
    useEffect( () => {
        //define async function inside useEffect() and call to prevent
        //error
        const fetchData = async () => {
            try {
                const response = await League.get("/teams/" + p.teamid);
                //console.log(response);
                setRoster(response.data.data.team);
            
            } catch (error) {
                console.log(error);
            }
        }
       
        fetchData();
    },[]);



return(
    <div id="Roster"className="tabcontent">
                <div className="list-group">
                    <h2>Roster</h2>
                    <table className="table table-hover rounded rounded-4 overflow-hidden">
                        <thead >
                            <tr className="bg-danger text-light">
                                <th scope="col">Name</th>
                                <th scope="col">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roster && roster.map( (team) => {
                                return(
                                
                                <tr key ={team.player_id} >
                                    <td className="clickable" onClick={()=>navigate(`/players/${team.player_id}`)}>{team.player_first_name} {team.player_last_name}</td>
                                    <td>{team.team_name}</td>
                                </tr>


                                
                                );
                            
                            })}
                        </tbody>
                    </table>
                    </div>
                    </div>
)
};

export default Roster;