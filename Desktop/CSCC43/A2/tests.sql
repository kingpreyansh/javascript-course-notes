-- Insert 10 players with different id's, playername, email, country_code, coins, rolls, wins, losses, total_battles, guild
INSERT INTO Player(id, playername, email, country_code,coins, rolls, wins, losses, total_battles, guild)
VALUES (1, 'Player1', 'player1@gmail.com', '333', 5, 5, 5, 6, 10, 7), (2, 'Player2',  'player1@gmail.com', '333', 5, 5, 5, 6, 10, 7),  (3, 'player1@gmail.com', '333', 5, 5, 5, 6, 10, 7), (3, 'player1@gmail.com', '333', 5, 5, 5, 6, 10, 7), (3, 'player1@gmail.com', '333', 5, 5, 5, 6, 10, 7), (3, 'player1@gmail.com', '333', 5, 5, 5, 6, 10, 7), (3, 'player1@gmail.com', '333', 5, 5, 5, 6, 10, 7), (3, 'player1@gmail.com', '333', 5, 5, 5, 6, 10, 7);

/*
Guild Attributes
 id INTEGER PRIMARY KEY,
    guildname VARCHAR UNIQUE NOT NULL,
    tag VARCHAR(5) UNIQUE NOT NULL,
    leader INTEGER NOT NULL REFERENCES Player(id) ON DELETE RESTRICT
*/

INSERT INTO Guild(id, guildname, tag, leader)
VALUES (1, 'Guild1', 'G1', 1), (2, 'Guild2', 'G2', 2), (3, 'Guild3', 'G3', 3), (4, 'Guild4', 'G4', 4), (5, 'Guild5', 'G5', 5), (6, 'Guild6', 'G6', 6), (7, 'Guild7', 'G7', 7);

/*
Lilmon Inventory
  id SERIAL PRIMARY KEY,
      l_id INTEGER NOT NULL REFERENCES Lilmon(id) ON DELETE RESTRICT,
      p_id INTEGER NOT NULL REFERENCES Player(id) ON DELETE CASCADE,
      in_team BOOLEAN NOT NULL DEFAULT FALSE,
      fav BOOLEAN NOT NULL DEFAULT FALSE
*/
INSERT INTO Lilmon_Inventory(l_id, p_id, in_team, fav)
VALUES (1, 1, TRUE, TRUE), (2, 1, FALSE, FALSE), (3, 1, FALSE, FALSE), (4, 1, FALSE, FALSE), (5, 1, FALSE, FALSE), (6, 1, FALSE, FALSE), (7, 1, FALSE, FALSE), (8, 1, FALSE, FALSE), (9, 1, FALSE, FALSE), (10, 1, FALSE, FALSE), (11, 1, FALSE, FALSE), (12, 1, FALSE, FALSE), (13, 1, FALSE, FALSE), (14, 1, FALSE, FALSE), (15, 1, FALSE, FALSE), (16, 1, FALSE, FALSE), (17, 1, FALSE, FALSE), (18, 1, FALSE, FALSE), (19, 1, FALSE, FALSE), (20, 1, FALSE, FALSE), (21, 1, FALSE, FALSE), (22, 1, FALSE, FALSE), (23, 1, FALSE, FALSE), (24, 1, FALSE, FALSE), (25, 1, FALSE, FALSE), (26, 1, FALSE, FALSE), (27, 1, FALSE, FALSE), (28, 1, FALSE, FALSE), (29, 1, FALSE, FALSE), (30, 1, FALSE, FALSE), (31, 1, FALSE, FALSE), (32, 1, FALSE, FALSE), (33, 1, FALSE, FALSE), (34, 1, FALSE, FALSE), (35, 1, FALSE, FALSE), (36, 1, FALSE, FALSE), (37, 1, FALSE, FALSE), (38, 1, FALSE, FALSE), (39, 1, FALSE, FALSE), (40, 1, FALSE, FALSE), (41, 1, FALSE, FALSE), (42, 1, FALSE, FALSE), (43, 1, FALSE, FALSE), (44, 1, FALSE, FALSE), (45, 1, FALSE, FALSE), (46, 1, FALSE, FALSE), (47, 1, FALSE, FALSE), (48, 1, FALSE, FALSE), (49, 1, FALSE, FALSE), (50, 1, FALSE, TRUE);

/*
PlayerRatings
  id SERIAL PRIMARY KEY,
      p_id INTEGER NOT NULL REFERENCES Player(id) ON DELETE RESTRICT,
      month INTEGER NOT NULL,
      year INTEGER NOT NULL,
      monthly_rating INTEGER NOT NULL,
      all_time_rating INTEGER NOT NULL,
      CHECK (month BETWEEN 1 AND 12)
*/
-- player id's should be from 1 to 10
INSERT INTO PlayerRatings(p_id, month, year, monthly_rating, all_time_rating)
VALUES (1, 1, 2020, 100, 100), (2, 1, 2020, 100, 100), (3, 1, 2020, 100, 100), (4, 1, 2020, 100, 100), (5, 1, 2020, 100, 100), (6, 1, 2020, 100, 100), (7, 1, 2020, 100, 100), (8, 1, 2020, 100, 100), (9, 1, 2020, 100, 100), (10, 1, 2020, 100, 100);

/*
GuildRatings
    id SERIAL PRIMARY KEY,
        g_id INTEGER NOT NULL REFERENCES Guild(id) ON DELETE RESTRICT,
        month INTEGER NOT NULL,
        year INTEGER NOT NULL,
        monthly_rating INTEGER NOT NULL,
        all_time_rating INTEGER NOT NULL,
        CHECK (month BETWEEN 1 AND 12)
*/
INSERT INTO GuildRatings(g_id, month, year, monthly_rating, all_time_rating)
VALUES (1, 1, 2020, 100, 100), (2, 1, 2020, 100, 100), (3, 1, 2020, 100, 100), (4, 1, 2020, 100, 100), (5, 1, 2020, 100, 100), (6, 1, 2020, 100, 100), (7, 1, 2020, 100, 100);