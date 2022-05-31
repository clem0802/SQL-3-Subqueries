----------------------------------------------(MAX)
__________________________________
| mario_games                    |
----------------------------------
| name                 | release | 
----------------------------------
| Mario Bros           | 1983    | 
----------------------------------
| Mario Clash          | 1995    |
----------------------------------
| Super Mario Galaxy   | 2007    | 
----------------------------------
| Super Mario 3D World | 2013    | 
----------------------------------


// select the "name" of the newest game
SELECT name
FROM mario_games
WHERE release = 
(
  SELECT MAX(release)
  FROM mario_games
);
// name
// Super Mario 3D World
