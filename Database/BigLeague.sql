-- tables
-- Table: Teams
CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    season int NOT NULL,
    tier int, 
    team_name varchar NOT NULL,
    wins int NOT NULL DEFAULT 0,
    losses int NOT NULL DEFAULT 0,
    points_for int NOT NULL DEFAULT 0,
    points_against int NOT NULL DEFAULT 0

);

--Table: Players
CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    team_id int REFERENCES teams(team_id),
    player_first_name varchar NOT NULL,
    player_last_name varchar NOT NULL
);

--Table: Games
CREATE TABLE games (
    game_id SERIAL PRIMARY KEY,
    season int NOT NULL,
    home_team int  REFERENCES teams(team_id),
    away_team int  REFERENCES teams(team_id),
    home_points int NOT NULL,
    away_points int NOT NULL,
    date_played date NOT NULL
);

--Table: Player Game Statistics
CREATE TABLE player_stats (
    player_id int REFERENCES players(player_id),
    game_id int REFERENCES games(game_id),
    points int NOT NULL DEFAULT 0,
    defensive_rebounds int NOT NULL DEFAULT 0,
    offensive_rebounds int NOT NULL DEFAULT 0,
    assists int NOT NULL DEFAULT 0,
    steals int NOT NULL DEFAULT 0,
    blocks int NOT NULL DEFAULT 0,
    free_throw_attempts int NOT NULL DEFAULT 0,
    free_throw_made int NOT NULL DEFAULT 0,
    two_point_attempts int NOT NULL DEFAULT 0,
    two_points_made int NOT NULL DEFAULT 0,
    three_point_attempts int NOT NULL DEFAULT 0,
    three_points_made int NOT NULL DEFAULT 0,
    fouls int NOT NULL DEFAULT 0,
    turnovers int NOT NULL DEFAULT 0,
    PRIMARY KEY(player_id, game_id)

);
