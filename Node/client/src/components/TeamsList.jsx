import React, {useEffect} from "react";
import { useContext } from "react";
import League from "../apis/League";
import { TeamsContext, TeamsContextProvider } from "../context/TeamsContext";

const TeamsList = (props) =>{

    const {teams, setTeams} = useContext(TeamsContext);
    useEffect( () => {
        //define async function inside useEffect() and call to prevent
        //error
        const fetchData = async () => {
            try {
                const response = await League.get("/teams");
                console.log(response);
                setTeams(response.data.data.teams);
            
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
                        <th scope="col">Team ID</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Wins</th>
                        <th scope="col">Losses</th>
                        <th scope="col">Points For</th>
                        <th scope="col">Points Against</th>
                    </tr>
                </thead>
                <tbody>
                    {teams && teams.map( (team) => {
                        return(
                        <tr key ={team.team_id}>
                            <td>{team.team_id}</td>
                            <td>{team.team_name}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                            <td>{team.points_for}</td>
                            <td>{team.points_against}</td>
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