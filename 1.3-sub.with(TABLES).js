// different tables
// there may be info from one table that can be used in another table query
// like the average user age from the "statistics" table

______________________________
| age_statistics             |                                   
------------------------------
| age    | description       | 
------------------------------
| 91     | max user age      | 
------------------------------
| 33     | average user age  | 
-------------------------------
| 18     | min user age      | 
------------------------------


__________________________________
| customer                       |
----------------------------------
| first_name  | last_name  | age |
----------------------------------
| James       | Butt       | 76  |
----------------------------------
| Josephine   | Darakjy    | 41  |
----------------------------------
| Lenna       | Paprocki   | 46  |
----------------------------------
| Donette     | Foller     | 18  |
----------------------------------
| Simona      | Morasca    | 33  |
----------------------------------

SELECT age
FROM age_statistics
WHERE description = 'average user age';
// age
// 33

-------------------------------------------
SELECT *
FROM customer
WHERE age > 
(
  SELECT age
  FROM age_statistics
  WHERE description = 'average user age'
);

// ----------------------------------
// | first_name  | last_name  | age |
// ----------------------------------
// | James       | Butt       | 76  |
// ----------------------------------
// | Josephine   | Darakjy    | 41  |
// ----------------------------------
// | Lenna       | Paprocki   | 46  |
// ----------------------------------




