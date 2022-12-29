import React, {useEffect} from "react";
import { useContext } from "react";
import League from "../apis/League";
import { PlayersContext, PlayersContextProvider } from "../context/PlayersContext";

const PlayersList = (props) =>{
    
    const {players, setPlayers} = useContext(PlayersContext);
    useEffect( () => {
        //define async function inside useEffect() and call to prevent
        //error
        const fetchData = async () => {
            try {
                const response = await League.get("/players");
                console.log(response);
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
                        <th scope="col">Points</th>
                        <th scope="col">Rebounds</th>
                        <th scope="col">Assists</th>
                        <th scope="col">Steals</th>
                        <th scope="col">Blocks</th>
                        <th scope="col">FGA</th>
                        <th scope="col">FGM</th>
                        <th scope="col">3PTA</th>
                        <th scope="col">3PTM</th>
                        <th scope="col">FTA</th>
                        <th scope="col">FTM</th>
                        <th scope="col">Fouls</th>
                        <th scope="col">TO</th>
                    </tr>
                </thead>
                <tbody>
                    {players && players.map((player) => {
                        return(
                            <tr key={player.player_id}>
                                <td>{player.player_id}</td>
                                <td>{player.player_first_name} {player.player_last_name}</td>
                                <td>{player.points}</td>
                                <td>{player.offensive_rebounds + player.defensive_rebounds}</td>
                                <td>{player.assists}</td>
                                <td>{player.steals}</td>
                                <td>{player.blocks}</td>
                                <td>{player.two_point_attempts + player.three_point_attempts}</td>
                                <td>{player.two_points_made + player.three_points_made}</td>
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