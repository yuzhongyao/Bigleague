--Reset SERIAL ID columns
--Teams
ALTER SEQUENCE teams_team_id_seq RESTART WITH 1;

--Players
ALTER SEQUENCE players_player_id_seq RESTART WITH 1;

--Games
ALTER SEQUENCE games_game_id_seq RESTART WITH 1;

--Test data for tables
--Teams test data
INSERT INTO teams(season, tier, team_name,wins,losses,points_for,points_against)
VALUES  (1,1,'Wolves',0,0,0,0),
        (1,1,'Wolvepack',0,0,0,0),
        (1,1,'Lakers',1,0,45,37),
        (1,1,'Gunnas',0,1,37,45),
        (1,1,'BTB',1,0,80,77),
        (1,1,'www',0,1,77,80),
        (1,1,'New Era Hoopers',0,1,40,55),
        (1,1,'Spookaz Elite',1,0,55,40);

--Players test data
INSERT INTO players(team_id, player_first_name, player_last_name)
--Team 1 Wolves
VALUES  (1, 'Justin', 'Tee'),
        (1, 'La Roe', 'Elmar'),
        (1, 'Dakoda', 'Daniel'),
        (1, 'Jesse', 'Jeffrey'),
        (1, 'Rajah', 'Williams'),
        (1, 'John', 'Smith'),
        (1, 'Quincy', 'Adelaide'),
        (1, 'Lawrence', 'Avert'),

--Team 2 Wolvepack
        (2, 'Darren', 'Tan'),
        (2, 'Grante', 'Turner'),
        (2, 'Ashwin', 'Selvakumar'),
        (2, 'Jesse', 'Smith'),
        (2, 'Shannon', 'Tular'),
        (2, 'John', 'Doe'),
        (2, 'Steven', 'He'),

--Team 3 Lakers
        (3, 'Kobe', 'Bryant'),          --16
        (3, 'Shak', 'O''neal'),         --17    
        (3, 'Kamar', 'De''shae'),       --18
        (3, 'Jordan', 'Pippen'),        --19
        (3, 'Daniel', 'Rose'),          --20

--Team 4 Gunnas
        (4, 'Jerome', 'Alexander'),     --21
        (4, 'Jeremy', 'Alexander'),     --22
        (4, 'Anthony', 'Pinder'),       --23
        (4, 'Larry', 'Lobster'),        --24
        (4, 'Ahmed', 'Qurtir'),         --25
        (4, 'Mustafa', 'Sanchurry'),    --26
        (4, 'Mithun', 'Sritharan'),     --27
        (4, 'Darren', 'Obwa'),          --28
        (4, 'Royal', 'Sash'),           --29
        (4, 'Jaeden', 'Alexis'),        --30
--Team 5 BTB
        (5, 'Andrew', 'Taylor'),        --31
        (5, 'Maurice', 'Jones'),        --32
        (5, 'Lebron', 'James'),         --33
        (5, 'Chris', 'Paul'),           --34
        (5, 'Demar', 'Derozan'),        --35
        (5, 'John', 'Cena'),            --36
        (5, 'Parke', 'Godfrey'),        --37

--Team 6 www
        (6, 'Jordan', 'Anderson'),
        (6, 'Isaiah', 'Anka'),
        (6, 'Maurice', 'John'),
        (6, 'Rakiean', 'Dean'),
        (6, 'Darius', 'Skinner'),
        (6, 'Rakeel', 'Anta'),

--Team 7 New Era Hoopers
        (7, 'James', 'Wiseman'),
        (7, 'Julian', 'Newman'),
        (7, 'Malaci', 'Davit'),
        (7, 'David', 'Moore'),
        (7, 'Marcus' ,'Moore'),
        (7, 'Samson', 'Arthavan'),
        (7, 'Nemo', 'Alice'),

    --Team 8 Spookaz Elite
        (8, 'Nati', 'Dubale'),
        (8, 'Delaxsan', 'Varathop'),
        (8, 'Vlared', 'Williams'),
        (8, 'Donavan', 'Lewis'),
        (8, 'Bell', 'George'),
        (8, 'Mints', 'Bird'),
        (8, 'Kie', 'Depark');
    
--Games Test Data
INSERT INTO games(season, home_team, away_team, home_points, away_points, date_played)
VALUES  (1, 3, 4, 45, 47, '2022-10-31'), --Lakers(3) vs Gunnas(4)
        (1, 5, 6, 80, 77, '2022-10-31'), --BTB(5) vs www(6)
        (1, 7, 8, 40, 55, '2022-10-31'); --New Era Hoopers(7) vs --Spookaz Elite(8)

--Individual Player Statistics Data
INSERT INTO player_stats(player_id, game_id, points, defensive_rebounds, offensive_rebounds, assists, steals, blocks, free_throw_attempts, free_throw_made, two_point_attempts, two_points_made, three_point_attempts, three_points_made, fouls, turnovers)
--Lakers
VALUES  (16,1, 20, 5, 2, 3, 0, 0, 2, 2, 15, 6, 5, 2, 3, 6), --16 Kobe Bryant
        --Total points left: 25, TO: 6, Assists: 2, Fouls: 3
        --Other team attempts:5, fouls: 1
        (17, 1, 13, 12, 4, 2, 0, 3, 5, 1, 10, 6, 0,0,3, 0),
        --Total points left: 12, TO: 6, Assists: 6, Fouls: 6
        --Other team attempts:18, fouls: 4
        (18, )
