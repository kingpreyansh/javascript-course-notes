-- The Player table contains information about the players of the game.
-- 'id' is the id of the player.
-- 'playername' is the chosen playername of the player.
-- 'email' is the email of the player.
-- 'country_code' is the ISO 3166-1 alpha-3 code of the country that the player is in. See https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3 for more details.
-- 'coins' is the number of coins the player currently has. You can assume this is always >= 0.
-- 'rolls' is the number of times the player has spent coins to acquire a random lilmon. You can assume this is always >= 0.
-- 'wins' is the number of times the player has won a completed battle. You can assume this is always >= 0.
-- 'losses' is the number of times the player has lost a completed battle. You can assume this is always >= 0.
-- 'total_battles' is the number of times the player has participated in a (not necessarily completed) battle. You can assume this is always >= 0. The reason why wins plus losses is not necessarily equal to total_battles is that there may be some unforeseen circumstances that lead to a battle not being completed (eg: server or connection issues).
-- 'guild' is the id of the guild that the player belongs to (whether they are member or a leader) if they belong to one, NULL otherwise. A player can only belong to at most one guild. The constraint on this column can be found after the definition of the Guild table.


/*
Player Attributes
    id INTEGER PRIMARY KEY,
    playername VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    country_code CHAR(3) NOT NULL,
    coins INTEGER NOT NULL DEFAULT 0,
    rolls INTEGER NOT NULL DEFAULT 0,
    wins INTEGER NOT NULL DEFAULT 0,
    losses INTEGER NOT NULL DEFAULT 0,
    total_battles INTEGER NOT NULL DEFAULT 0,
    guild INTEGER
*/


-- Insert 10 different players with ids from 1 to 10 different attributes into the Player table.
INSERT INTO Player (id, playername, email, country_code, coins, rolls, wins, losses, total_battles, guild)
VALUES (1, 'player1', 'player1@gmail.com', '333', 5, 6, 7, 8, 19, 1),
       (2, 'player2', 'player2@gmail.com', '334', 5, 6, 7, 8, 25, 2),
       (3, 'player3', 'player3@gmail.com', '335', 5, 6, 7, 8, 37, 3),
       (4, 'player4', 'player4@gmail.com', '336', 2, 6, 9, 50, 82, 4),
       (5, 'player5', 'player5@gmail.com', '336', 2, 100, 100, 8, 199, 5),
       (6, 'player6', 'player6@gmail.com', '333', 100000, 40, 19, 40, 70, 6);


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
-- month and years should be different
-- monthly_rating and all_time_rating should be different and should be from 1 to 100
INSERT INTO PlayerRatings(p_id, month, year, monthly_rating, all_time_rating)
VALUES (1, 1, 2019, 1, 1), (2, 2, 2019, 2, 2), (3, 3, 2019, 3, 3), (4, 4, 2019, 4, 4), (5, 5, 2019, 5, 5), (6, 6, 2019, 6, 6), (7, 7, 2019, 7, 7), (8, 8, 2019, 8, 8), (9, 9, 2019, 9, 9), (10, 10, 2019, 10, 10);

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
-- guild id's should be from 1 to 10
-- month and years should be different
-- monthly_rating and all_time_rating should be different and should be from 1 to 100
INSERT INTO GuildRatings(g_id, month, year, monthly_rating, all_time_rating)
VALUES (1, 1, 2019, 1, 1), (2, 2, 2019, 2, 2), (3, 3, 2019, 3, 3), (4, 4, 2019, 4, 4), (5, 5, 2019, 5, 5), (6, 6, 2019, 6, 6), (7, 7, 2019, 7, 7), (8, 8, 2019, 8, 8), (9, 9, 2019, 9, 9), (10, 10, 2019, 10, 10);