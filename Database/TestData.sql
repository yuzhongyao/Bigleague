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
        (1,1,'Lakers',0,1,45,115),
        (1,1,'Gunnas',1,0,115,45),
        (1,1,'BTB',1,0,112,105),
        (1,1,'www',0,1,105,112),
        (1,1,'New Era Hoopers',0,1,95,132),
        (1,1,'Spookaz Elite',1,0,132,95);

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
        (5, 'Jan', 'McDaniels'),        --38
        (5, 'Nick', 'Richards'),        --39
        (5, 'Voo', 'Thor'),             --40

--Team 6 www
        (6, 'Jordan', 'Anderson'),      --41
        (6, 'Isaiah', 'Anka'),          --42
        (6, 'Maurice', 'John'),         --43
        (6, 'Rakiean', 'Dean'),         --44
        (6, 'Darius', 'Skinner'),       --45
        (6, 'Rakeel', 'Anta'),          --46
        (6, 'Maury', 'Jones'),          --47
        (6, 'Marco', 'Polo'),           --48
        (6, 'Damascus', 'Spinner'),     --49
        (6, 'Meekish', 'Srithumar'),    --50

--Team 7 New Era Hoopers
        (7, 'James', 'Wiseman'),        --51
        (7, 'Julian', 'Newman'),        --52
        (7, 'Malaci', 'Davit'),         --53
        (7, 'David', 'Moore'),          --54
        (7, 'Marcus' ,'Moore'),         --55
        (7, 'Samson', 'Arthavan'),      --56
        (7, 'Nemo', 'Alice'),           --57
        (7, 'Neero', 'Lu'),             --58
        (7, 'Noah', 'Freed'),           --59    
        (7, 'King', 'Royal'),           --60
        (7, 'Stuart', 'Little'),        --61

    --Team 8 Spookaz Elite
        (8, 'Nati', 'Dubale'),          --62
        (8, 'Delaxsan', 'Varathop'),    --63
        (8, 'Vlared', 'Williams'),      --64
        (8, 'Donavan', 'Lewis'),        --65
        (8, 'Bell', 'George'),          --66
        (8, 'Mints', 'Bird'),           --67
        (8, 'Kie', 'Depark'),           --68
        (8, 'Meester', 'Doo'),          --69   
        (8, 'Fred', 'Scrappy'),         --70    
        (8, 'Scooby', 'Doo'),           --71
        (8, 'Vlad', 'Hercle'),          --72
        (8, 'Quincy', 'Ween');          --73
    
--Games Test Data
INSERT INTO games(season, home_team, away_team, home_points, away_points, date_played)
VALUES  (1, 1, 2, 0, 0, '2022-10-31'),
        (1, 3, 4, 45, 115, '2022-10-31'), --Lakers(3) vs Gunnas(4)
        (1, 5, 6, 112, 105, '2022-10-31'), --BTB(5) vs www(6)
        (1, 7, 8, 95, 132, '2022-10-31'), --New Era Hoopers(7) vs --Spookaz Elite(8)
        (1, 3, 4, 0, 0,'2022-10-31');2
--Individual Player Statistics Data
INSERT INTO player_stats(player_id, game_id, points, defensive_rebounds, offensive_rebounds, assists, steals, blocks, free_throw_attempts, free_throw_made, two_point_attempts, two_points_made, three_point_attempts, three_points_made, fouls, turnovers)
--Lakers
VALUES  (1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (10,1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (11,1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (12, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (13, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (14, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (15, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), 
        (16, 2, 20, 5, 2, 3, 0, 0, 2, 2, 15, 6, 5, 2, 4, 6), 
        --Total points left: 25, TO: 6, Assists: 2, Fouls: 3, 
        --Other team attempts:5, fouls: 1
        (17, 2, 13, 12, 4, 2, 0, 3, 5, 1, 10, 6, 0,0,4, 0),
        --Total points left: 12, TO: 6, Assists: 6, Fouls: 6
        --Other team attempts:18, fouls: 4
        (18, 2, 5, 0, 0, 1, 0, 0, 0, 0, 3, 1, 1, 1, 4, 2),
        --Total points left: 7, TO: 8, Assists: 7, Fouls: 8
        --Other team attempts:18, fouls: 4
        (19, 2, 7, 4, 1, 1, 2, 1, 2, 0, 5, 2, 4, 1, 4, 4),
        --Total points left: 0, TO: 12, Assists: 8, Fouls: 9
        --Other team attempts:22, fouls: 5
        (20, 2, 0, 9, 0, 0, 0, 0, 4, 0, 1, 0, 2, 0, 3, 0),
         --Total points left: 0, TO: 12, Assists: 8, Fouls: 13, 
        --Other team attempts:31, fouls: 7
--Gunnas                 --a-s--b                   -f--to
        (21, 2, 16, 4, 3, 0, 1, 0, 3, 3, 9, 5, 2, 1, 1, 3),
        (22, 2, 18, 5, 0, 5, 2, 0, 10, 6, 4, 3, 8, 2, 2, 1),
        (22, 5, 18, 5, 0, 5, 2, 0, 10, 6, 4, 3, 8, 2, 2, 1),

        (23, 2, 9, 3, 1, 0 ,3 ,0, 1, 1, 4, 1, 2, 2, 1, 1),
        (24, 2, 21, 4, 0, 8, 0, 0, 10, 8, 11, 5, 5, 1, 1, 0),
        (25, 2, 6, 3, 0, 2, 0, 0, 0, 0, 5, 3, 1, 0, 0, 0),
        (26, 2, 7, 4, 0, 2, 0, 0, 5, 4, 0, 0, 5, 1, 0, 2),
        (27, 2, 9, 1, 0, 3, 0, 0, 2, 2, 5, 2, 5, 1, 1, 0),
        (28, 2, 2, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 0, 0, 0),
        (29, 2, 15, 0,0, 2, 0, 0, 5, 3, 4, 3, 3, 2, 0, 0),
        (30, 2, 8, 0, 0, 1, 0, 0, 5, 4, 3, 2, 0, 0, 0, 0),
--BTB
        (31, 3, 14, 3, 3, 5, 1, 0, 2, 2, 10, 6, 3, 0, 1, 0),
        (32, 3, 18, 6, 4, 2, 3, 1, 2, 2, 9, 8, 0, 0, 5, 2),
        (33, 3, 17, 4, 0, 9, 0, 0, 1, 1, 4, 2, 15, 4, 2, 5),
        (34, 3, 17, 2, 1, 2, 2, 0, 2, 2, 7, 6, 8, 1, 2, 1),
        (35, 3, 16, 2, 3, 0, 6, 0, 8, 6, 12, 5, 6, 0, 4, 1),
        (36, 3, 10, 3, 1, 0, 1, 2, 2, 2, 6, 4, 1, 0, 2, 1),
        (37, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0),
        (38, 3, 6, 0, 2, 1, 0, 3, 2, 2, 2, 2, 0, 0, 3, 1),
        (39, 3, 14, 3, 0, 3, 2, 0, 5, 4, 2, 2, 2, 2, 4, 1),
        (40, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0),
--www
        (41, 3, 10, 1 ,0, 0, 1, 1, 0, 0, 4, 2, 6, 2, 2, 0),
        (42, 3, 23, 5, 1, 3, 0, 0, 4, 4, 16, 8, 1, 1, 2, 3),
        (43, 3, 20, 2, 3, 4, 0, 2, 10, 7, 4, 2, 4, 3, 1, 1),
        (44, 3, 14, 6, 3, 2, 0, 2, 2, 2, 7, 3, 6, 2, 1 ,6),
        (45, 3, 2, 4, 0, 7, 1, 1, 0, 0, 7, 1, 3, 0, 6, 5),
        (46, 3, 6, 2, 2, 1, 0, 0, 0, 0, 0, 0, 5, 2, 1, 0),
        (47, 3, 14, 3, 8, 1, 0, 1, 4, 3, 9, 4, 2, 1, 2, 2),
        (48, 3, 10, 0, 0, 1, 1, 0, 3, 3, 3, 2, 4, 1,0, 1),
        (49, 3, 3, 2, 1, 4, 0, 0, 0, 0, 2, 0, 4, 1, 2, 4),
        (50, 3, 3, 1, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0),
--New Era Hoopers 
        (51, 4, 12, 5, 3, 0, 1, 0, 3, 2, 10, 5, 3, 0, 4, 3),
        (52, 4, 12, 3, 6, 2, 2, 0, 0, 0, 8, 3, 4, 2, 0, 0),
        (53, 4, 15, 1, 0, 1, 0, 0, 2, 2, 6, 2, 9, 3, 0, 1),
        (54, 4, 6, 6, 4, 1, 0, 1, 0, 0, 6, 3, 0, 0, 3, 4),
        (55, 4, 6, 4, 0, 1, 0, 1, 0,0, 7, 3, 4, 0,1, 1),
        (56, 4, 9, 4, 0, 3, 0, 1, 4, 2, 5, 2, 4, 1, 2, 1),
        (57, 4, 7,0, 0, 0, 1, 1, 2, 1, 1, 0, 5, 2,0, 2),
        (58, 4, 6,1, 2, 1, 0, 0, 4, 3, 1, 0, 3, 1,0, 0),
        (59, 4, 6, 1, 6, 3, 0, 2, 0, 0, 5, 3, 0, 0,2, 3),
        (60, 4, 10,4, 1, 3, 1, 0, 4, 3, 6, 2, 6, 1, 2, 1),
        (61, 4, 6, 2, 1, 3, 1, 0, 0,0, 5, 3, 2, 0,3, 2),

--Spookaz Elite
        (62, 4, 4, 6, 1, 6, 1, 0, 2, 2, 4, 1, 2, 0, 2, 1),
        (63, 4, 10, 3, 1, 1, 1, 0, 0, 0, 5, 2, 5, 2, 1, 2),
        (64, 4, 2, 3, 1, 4, 1, 0, 0, 0, 3, 1, 0, 0, 0, 0),
        (65, 4, 16, 4, 1, 5, 1, 0, 3, 3, 4, 2, 7, 3, 1, 1),
        (66, 4, 36, 2, 0, 2, 3, 1, 6, 5, 10, 8, 10, 5, 1, 0),
        (67, 4, 15, 3, 0, 2, 0, 0, 2, 2, 4, 2, 4, 3,2, 1),
        (68, 4, 9, 5, 0,2, 0, 2, 2, 2, 2, 2, 3, 1,3, 1),
        (69, 4, 17, 4,0, 4, 0, 0, 0, 0, 1, 1, 6, 5,2, 1),
        (70, 4, 2,1, 1, 2, 0, 0, 0, 0, 3, 1, 0, 0,0, 0 ),
        (71, 4, 5, 0, 0, 2, 1, 0, 0, 0, 1, 1, 2, 1,3, 3),
        (72, 4, 11, 2, 0, 4, 1, 0, 1, 1, 4, 2, 5, 2,0, 0),
        (73, 4, 5, 2, 0, 1, 0, 0, 0, 0, 2, 1, 1, 1,2, 2);