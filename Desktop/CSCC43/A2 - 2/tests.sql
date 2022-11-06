-- Steps
-- run psql with default host user and pass
-- create database a2


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
Lilmon table
    id INTEGER PRIMARY KEY,
    name VARCHAR UNIQUE NOT NULL,
    element1 VARCHAR NOT NULL,
    element2 VARCHAR,
    rarity INTEGER NOT NULL,
    CHECK (element1 IN ('Water', 'Fire', 'Air', 'Earth', 'Ice', 'Electric', 'Light', 'Dark')),
    CHECK (element2 IN ('Water', 'Fire', 'Air', 'Earth', 'Ice', 'Electric', 'Light', 'Dark')),
    CHECK (element2 != element1),
    CHECK (rarity BETWEEN 3 AND 5)
*/
-- Insert the 8 different lilmons into the Lilmon table.
INSERT INTO Lilmon (id, name, element1, element2, rarity) VALUES
(1, 'Watermon', 'Water', NULL, 3),
(2, 'Firemon', 'Fire', 'Water', 4),
(3, 'Airmon', 'Air', 'Earth', 5),
(4, 'Earthmon', 'Earth', NULL, 5),
(5, 'Icemon', 'Ice', NULL, 5),
(6, 'Electricmon', 'Electric', NULL, 3),
(7, 'Lightmon', 'Light', NULL, 4),
(8, 'Darkmon', 'Dark', NULL, 3);


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
VALUES (1, 'player1', 'player1@gmail.com', 'CAN', 5, 6, 7, 8, 19, 1),
       (2, 'player2', 'player2@gmail.com', 'MEX', 5, 6, 7, 8, 25, 2),
       (3, 'player3', 'player3@gmail.com', 'USA', 5, 6, 38, 3, 50, 3),
       (4, 'player4', 'player4@gmail.com', 'CAN', 2, 6, 9, 50, 82, 4),
       (5, 'player5', 'player5@gmail.com', 'MEX', 2, 100, 100, 8, 199, 5),
       (6, 'player6', 'player6@gmail.com', 'MYS', 100000, 40, 190, 40, 70, 6),
       (7, 'player7', 'player7@gmail.com', 'MYS', 100000, 40, 90, 40, 70, 6),
       (8, 'player8', 'player8@gmail.com', 'MYS', 100000, 40, 120, 40, 70, 6),
       (9, 'player8', 'player8@gmail.com', 'MYS', 100000, 40, 120, 40, 70, 7),
       (10, 'player8', 'player8@gmail.com', 'MYS', 100000, 40, 120, 40, 70, 8);


/*
Guild Attributes
 id INTEGER PRIMARY KEY,
    guildname VARCHAR UNIQUE NOT NULL,
    tag VARCHAR(5) UNIQUE NOT NULL,
    leader INTEGER NOT NULL REFERENCES Player(id) ON DELETE RESTRICT
*/

INSERT INTO Guild(id, guildname, tag, leader)
VALUES (1, 'Guild1', 'G1', 1), (2, 'Guild2', 'G2', 2), (3, 'Guild3', 'G3', 3), (4, 'Guild4', 'G4', 4), (5, 'Guild5', 'G5', 5), (6, 'Guild6', 'G6', 6), (7, 'Guild7', 'G7', 7), (8, 'Guild8', 'G8', 8);

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
INSERT INTO GuildRatings(id, g_id, month, year, monthly_rating, all_time_rating)
VALUES (100, 1, 1, 2020, 1, 5000),
        (101, 1, 2, 2020, 50, 5000),
        (102, 1, 3, 2020, 100, 5000),
        (103, 1, 4, 2020, 150, 5000),
       (200, 2, 1, 2020, 400, 4000),
       (201, 2, 2, 2020, 550, 4000),
       (202, 2, 5, 2020, 500, 4000),
       (300, 3, 3, 2020, 3, 6000),
       (400, 4, 4, 2020, 4, 2000),
       (401, 4, 5, 2020, 750, 2000),
       (500, 5, 5, 2020, 5, 450),
       (600, 6, 6, 2020, 6, 7000);

/*
Lilmon Inventory
  id SERIAL PRIMARY KEY,
      l_id INTEGER NOT NULL REFERENCES Lilmon(id) ON DELETE RESTRICT,
      p_id INTEGER NOT NULL REFERENCES Player(id) ON DELETE CASCADE,
      in_team BOOLEAN NOT NULL DEFAULT FALSE,
      fav BOOLEAN NOT NULL DEFAULT FALSE
*/
-- Insert 10 lilmons with different p_id's from 1 to 6
INSERT INTO Lilmon_Inventory(id, l_id, p_id, in_team, fav)
VALUES (100, 1, 1, TRUE, FALSE),
       (200, 2, 1, TRUE, TRUE),
       (300, 3, 1, FALSE, TRUE),
       (301, 4, 1, FALSE, TRUE),
       (301, 5, 1, FALSE, TRUE),
       (400, 4, 2, TRUE, FALSE),
       (500, 5, 2, TRUE, TRUE),
       (600, 6, 3, TRUE, TRUE),
       (700, 7, 4, FALSE, TRUE),
       (800, 8, 5, TRUE, FALSE),
       (900, 1, 6, TRUE, FALSE),
       (101, 2, 6, TRUE, TRUE);


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
VALUES (1, 1, 2019, 1, 2000),
       (2, 2, 2019, 2, 2500),
       (3, 3, 2019, 3, 5000),
       (4, 4, 2019, 4, 350),
       (5, 5, 2019, 5, 600),
       (6, 6, 2019, 6, 2000),
       (6, 7, 2019, 7, 2000),
       (6, 8, 2019, 8, 2000),
       (3, 9, 2019, 9, 5000),
       (3, 10, 2019, 10, 5000);

