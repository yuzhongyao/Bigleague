require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

//Middlewares
//app.use(morgan("dev"));
//order of middleware matters
//any amount of middleware allowed
//sequential top to bottom
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
app.get("/api/v1/teams", (req, res) =>
{
    res.status(200).json({
        status: "success",
        data:{
            team: "Spookaz Elite",
        },
        
    })
}
);

//Get a team of ID id
//server http://localhost:4000/api/v1/teams/:id
//app.get(URL, Callback )
app.get("/api/v1/teams/:id", (req, res)=>
{
    console.log(req.params);
    res.status(200).json({});
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
app.get("/api/v1/players", (req, res)=>
{
    console.log(req.baseUrl);
    res.status(200).json({});

});

//Get player with id
//server http://localhost:4000/api/v1/players/:id
app.get("/api/v1/players/:id", (req, res)=>
{
    console.log(req.baseUrl);
    res.status(200).json({p: req.params,});

});

//Get all games
//server http://localhost:4000/api/v1/games
app.get("/api/v1/games", (req, res)=>
{
    console.log(req.baseUrl);
    res.status(200).json({});

});

//Get game with id
//server http://localhost:4000/api/v1/games/:id
app.get("/api/v1/games/:id", (req, res)=>
{
    console.log(req.baseUrl);
    res.status(200).json({p: req.params,});

});



//if port is not defined, default to port 4001
const port = process.env.PORT || 4001;

app.listen(port, () =>{
    console.log("Server is up on port: " + port);
});













