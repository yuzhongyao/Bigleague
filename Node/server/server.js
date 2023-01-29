require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();
const cors = require("cors");

//Middlewares
//app.use(morgan("dev"));
//order of middleware matters
//any amount of middleware allowed
//sequential top to bottom


app.use(cors());

app.use((req,res, next)=>{
    console.log("middleware");
    next();
}); 
  

 


/*
Routes
OPERATION:           METHOD:       URL:
get Teams           GET             /api/v1/teams
get Team            GET             /api/v1/teams:id
//create Team         POST            /api/v1/teams
//update Team         PUT             /api/v1/teams
//delete Team         DELETE          /api/v1/teams
get Standings       GET             /api/v1/standings
get Players         GET             /api/v1/players
get Player          GET             /api/v1/players:id
//create Player       POST            /api/v1/players
//update Player       PUT             /api/v1/players
//delete Player       DELETE          /api/v1/players
get Games           GET             /api/v1/games
get Game            GET             /api/v1/games:id
//create Game         POST            /api/v1/games
//update Game         PUT             /api/v1/games
//delete Game         DELETE          /api/v1/games
*/

 

//Get all teams in season
//server http://localhost:4000/api/v1/teams
//app.get(URL, Callback )
app.get("/api/v1/teams", async (req, res) =>
{
    try{
        const result = await db.query("SELECT * FROM teams ORDER BY wins DESC, losses DESC, points_for - points_against DESC");
        console.log(result);
        res.status(200).json({
        status: "success",
        result: result.rows.length,
        data:{
            teams: result.rows,
        },
        
    })
    }
    catch(err){
        res.status(404).json({})
        console.log(err);
    }
    
    
}
);

//Get a team of ID id
//server http://localhost:4000/api/v1/teams/:id
//app.get(URL, Callback )
app.get("/api/v1/teams/:id", async (req, res)=>
{
    try{
    
        const result = await db.query(`SELECT *, (SELECT team_name FROM teams WHERE team_id = p.team_id) AS team_name FROM players p WHERE p.team_id =  $1` , [req.params.id]);
        const games = await db.query(`SELECT *, (SELECT team_name FROM teams WHERE team_id = g.away_team) AS away_name, (SELECT team_name FROM teams WHERE team_id = g.home_team) AS home_name FROM games g WHERE home_team = $1 OR away_team = $2`, [req.params.id, req.params.id]);
        console.log(result);
        res.status(200).json({
        status: "success",
        result: result.rows.length + games.rows.length,
        data:{
            team: result.rows,
            game: games.rows,
        },
        
    })
    }
    catch(err){
        res.status(404).json({

        })
        console.log(err);
    }
});

//Get standings of teams
//server http://localhost:4000/api/v1/standings
app.get("/api/v1/standings", (req, res)=>
{
    console.log(req.baseUrl);
    res.status(200).json({});

});

//Get all players
//server http://localhost:4000/api/v1/players
app.get("/api/v1/players", async (req, res)=>
{
    try{
        const result = await db.query(`SELECT player_stats.player_id, (SELECT player_first_name FROM players WHERE player_id = player_stats.player_id) AS first_name, (SELECT player_last_name FROM players WHERE players.player_id = player_stats.player_id) AS last_name, SUM(points) AS points, SUM(defensive_rebounds) AS defensive_rebounds, SUM(offensive_rebounds) AS offensive_rebounds, SUM(assists) AS assists, SUM(steals) AS steals, SUM(blocks) AS blocks, SUM(free_throw_attempts) AS free_throw_attempts, SUM(free_throw_made) AS free_throw_made, SUM(two_point_attempts) AS two_point_attempts, SUM(two_points_made) AS two_points_made, SUM(three_point_attempts) AS three_point_attempts, SUM(three_points_made) AS three_points_made, SUM(fouls) AS fouls, SUM(turnovers) AS turnovers FROM player_stats GROUP BY player_stats.player_id`);
        
        res.status(200).json({
        status: "success",
        result: result.rows.length,
        data:{
            players: result.rows,
        },
        
    })
    }
    catch(err){
        res.status(404).json({})
        console.log(err);
    }

});

//Get player with id
//server http://localhost:4000/api/v1/players/:team_name/:player_id
app.get("/api/v1/players/:team_name/:player_id", async (req, res)=>
{
    try{
        const t = await db.query("SELECT team_id FROM teams WHERE team_name = $1", [req.params.team_name]);
        //console.log(t.rows[0].team_id);
        //console.log(req.params.team_name);

        const result = await db.query("SELECT * FROM players WHERE player_id =  $1 AND team_id = $2", [req.params.player_id, t.rows[0].team_id]);

        //console.log(result);
        res.status(200).json({
        status: "success",
        result: result.rows.length,
        data:{
            player: result.rows,
        },
        
    })
    }
    catch(err){
        res.status(404).json({

        })
        console.log(err);
    }
});

//Get all games
//server http://localhost:4000/api/v1/games
app.get("/api/v1/games", async (req, res)=>
{
    try{
        const result = await db.query("SELECT *,(SELECT team_name AS home_name FROM teams WHERE games.home_team = teams.team_id), (SELECT team_name AS away_name FROM teams WHERE games.away_team = teams.team_id) FROM games");
        console.log(result);
        res.status(200).json({
        status: "success",
        result: result.rows.length,
        data:{
            games: result.rows,
        },
        
    })
    }
    catch(err){
        res.status(404).json({})
        console.log(err);
    }

});

//Get game with id
//server http://localhost:4000/api/v1/games/:game_id
app.get("/api/v1/games/:game_id", async(req, res)=>
{
    try{
        //const t = await db.query("SELECT team_id FROM teams WHERE team_name = $1", [req.params.team_name]);

        const result = await db.query("SELECT * FROM games WHERE game_id = $1", [req.params.game_id]);
        console.log(result);
        res.status(200).json({
        status: "success",
        result: result.rows.length,
        data:{
            games: result.rows,
        },
        
    })
    }
    catch(err){
        res.status(404).json({})
        console.log(err);
    }

});



//if port is not defined, default to port 4001
const port = process.env.PORT || 4001;

app.listen(port, () =>{
    console.log("Server is up on port: " + port);
});













