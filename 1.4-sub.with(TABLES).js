// different tables
______________________________________________
| store                                      |
----------------------------------------------
| store_name        | phone         | sales  |
----------------------------------------------
| Santa Cruz Bikes  | (831)476-4321 | 23434  |
----------------------------------------------
| Baldwin Bikes     | (516)379-8888 | 54543  |
----------------------------------------------
| Rowlett Bikes     | (972)530-5555 | 176760 |
----------------------------------------------


_______________________________
| sales_goals                 |  
-------------------------------
| description       | target  | 
-------------------------------
| minimum           | 40000   | 
-------------------------------
| outstanding       | 100000  | 
-------------------------------

SELECT *
FROM store
WHERE sales > 
(
  SELECT target
  FROM sales_goals
  WHERE description = 'minimum'
);

// ----------------------------------------------
// | store_name        | phone         | sales  |
// ----------------------------------------------
// | Baldwin Bikes     | (516)379-8888 | 54543  |
// ----------------------------------------------
// | Rowlett Bikes     | (972)530-5555 | 87676  |
// ----------------------------------------------


---------------------------------------------------------------
// select the name fo all the stores who have greater than outstanding sales
SELECT * 
FROM store
WHERE sales >
(
  SELECT target
  FROM sales_goals
  WHERE description = 'outstanding'
);

// ----------------------------------------------
// | store_name        | phone         | sales  |
// ----------------------------------------------
// | Rowlett Bikes     | (972)530-5555 | 176760 |
// ----------------------------------------------




