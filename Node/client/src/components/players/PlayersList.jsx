import React, {useEffect} from "react";
import { useContext } from "react";
import League from "../../apis/League";
import { PlayersContext, PlayersContextProvider } from "../../context/PlayersContext";
import { useNavigate } from "react-router-dom";

const PlayersList = (props) =>{
    let navigate = useNavigate();
    const {players, setPlayers} = useContext(PlayersContext);
    useEffect( () => {
        //define async function inside useEffect() and call to prevent
        //error
        const fetchData = async () => {
            try {
                const response = await League.get("/players");
                //console.log(response);
                setPlayers(response.data.data.players);
            
            } catch (error) {
                console.log(error)
            }
        }
       
        fetchData();
    },[]);

    return(
        <div className="container">
        <div className="list-group">
            <table className="table table-hover rounded rounded-4 overflow-hidden">
                <thead >
                    <tr className="bg-danger text-light">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">PTS</th>
                        <th scope="col">REB</th>
                        <th scope="col">AST</th>
                        <th scope="col">STL</th>
                        <th scope="col">BLK</th>
                        <th scope="col">FGA</th>
                        <th scope="col">FGM</th>
                        <th scope="col">3PA</th>
                        <th scope="col">3PM</th>
                        <th scope="col">FTA</th>
                        <th scope="col">FTM</th>
                        <th scope="col">Fouls</th>
                        <th scope="col">TO</th>
                    </tr>
                </thead>
                <tbody>
                    {players && players.map((player) => {
                        return(
                            <tr className="clickable" key={player.player_id} onClick={()=>navigate(`/players/${player.player_id}`)}>
                                <td>{player.player_id}</td>
                                <td>{player.first_name} {player.last_name}</td>
                                <td>{player.points}</td>
                                <td>{parseInt(player.offensive_rebounds) + parseInt(player.defensive_rebounds)}</td>
                                <td>{player.assists}</td>
                                <td>{player.steals}</td>
                                <td>{player.blocks}</td>
                                <td>{parseInt(player.two_point_attempts) + parseInt(player.three_point_attempts)}</td>
                                <td>{parseInt(player.two_points_made) + parseInt(player.three_points_made)}</td>
                                <td>{player.three_point_attempts}</td>
                                <td>{player.three_points_made}</td>
                                <td>{player.free_throw_attempts}</td>
                                <td>{player.free_throw_made}</td>
                                <td>{player.fouls}</td>
                                <td>{player.turnovers}</td>

                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>

        </div>
        </div>
    );
};

export default PlayersList;