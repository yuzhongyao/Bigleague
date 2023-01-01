import React, {useEffect} from "react";
import { useContext } from "react";
import League from "../apis/League";
import { GamesContext, GamesContextProvider } from "../context/GamesContext";
import moment from "moment";

const TeamsList = (props) =>{

    const {games, setGames} = useContext(GamesContext);
    useEffect( () => {
        //define async function inside useEffect() and call to prevent
        //error
        const fetchData = async () => {
            try {
                const response = await League.get("/games");
                console.log(response);
                setGames(response.data.data.games);
            
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
                        <th scope="col">Season</th>
                        <th scope="col">Home</th>
                        <th scope="col">Away</th>
                        <th scope="col">Home Points</th>
                        <th scope="col">Away Points</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {games && games.map( (game) => {
                        let date = moment(game.date_played).format("YYYY-MM-DD")
                        return(
                        <tr key ={game.game_id}>
                            <td>{game.game_id}</td>
                            <td>{game.season}</td>
                            <td>{game.home_team}</td>
                            <td>{game.away_team}</td>
                            <td>{game.home_points}</td>
                            <td>{game.away_points}</td>
                            <td>{date}</td>
                        </tr>
                        );
                       
                    })}
                </tbody>
            </table>

        </div>
        </div>
    );
};

export default TeamsList;