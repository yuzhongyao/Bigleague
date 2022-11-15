-- tables
-- Table: Teams
CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    season int NOT NULL CHECK(season >= 0),
    tier int CHECK(tier >= 0), 
    team_name varchar NOT NULL,
    wins int NOT NULL DEFAULT 0 CHECK(wins >= 0),
    losses int NOT NULL DEFAULT 0 CHECK(losses >= 0),
    points_for int NOT NULL DEFAULT 0 CHECK(points_for >= 0),
    points_against int NOT NULL DEFAULT 0 CHECK(points_against >= 0)

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
    home_points int NOT NULL CHECK(home_points >= 0),
    away_points int NOT NULL CHECK(home_points >= 0),
    date_played date NOT NULL
);

--Table: Player Game Statistics
CREATE TABLE player_stats (
    player_id int REFERENCES players(player_id),
    game_id int REFERENCES games(game_id),
    points int NOT NULL DEFAULT 0 CHECK (points >= 0),
    defensive_rebounds int NOT NULL DEFAULT 0 CHECK(defensive_rebounds >= 0),
    offensive_rebounds int NOT NULL DEFAULT 0 CHECK(offensive_rebounds >= 0),
    assists int NOT NULL DEFAULT 0 CHECK(assists >= 0),
    steals int NOT NULL DEFAULT 0 CHECK(steals >= 0),
    blocks int NOT NULL DEFAULT 0 CHECK(blocks >= 0),
    free_throw_attempts int NOT NULL DEFAULT 0 CHECK (free_throw_attempts >= 0),
    free_throw_made int NOT NULL DEFAULT 0 CHECK(free_throw_made >= 0),
    two_point_attempts int NOT NULL DEFAULT 0 CHECK(two_point_attempts >= 0),
    two_points_made int NOT NULL DEFAULT 0 CHECK(two_points_made >= 0),
    three_point_attempts int NOT NULL DEFAULT 0 CHECK(three_point_attempts >= 0),
    three_points_made int NOT NULL DEFAULT 0 CHECK(three_points_made >= 0),
    fouls int NOT NULL DEFAULT 0 CHECK(fouls >= 0),
    turnovers int NOT NULL DEFAULT 0 CHECK(turnovers >= 0),
    PRIMARY KEY(player_id, game_id)

);
