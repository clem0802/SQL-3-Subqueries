// "SUBQUERIES"
// want to find customers with an age over the average age

___________________________________________________________
| customers                                               |
-----------------------------------------------------------
| first_name  | last_name  | email                  | age |
-----------------------------------------------------------
| James       | Butt       | jbutt@gmail.com        | 76  |
-----------------------------------------------------------
| Josephine   | Darakjy    | josephine_da@da.org    | 41  |
-----------------------------------------------------------
| Lenna       | Paprocki   | l-pap@hotmail.com      | 46  |
-----------------------------------------------------------
| Donette     | Foller     | donette.foller@cox.net | 8   |
-----------------------------------------------------------
| Simona      | Morasca    | simona@morasca.com     | 3   |
-----------------------------------------------------------

  
SELECT AVE(age)
FROM customers; 
// 34.8 (the average age)


--------------------------------------------------
// SQL allows to combine queries
// queries that are part of another query are called "SUBQUERIES"
// subqueries return only one value

SELECT first_name, last_name, email
FROM customers
WHERE age > 
(
 SELECT AVE(age)
 FROM customers; 
)

-----------------------------------------------------
| first_name  | last_name  | email                  |
-----------------------------------------------------
| James       | Butt       | jbutt@gmail.com        |
-----------------------------------------------------
| Josephine   | Darakjy    | josephine_da@da.org    | 
-----------------------------------------------------
| Lenna       | Paprocki   | l-pap@hotmail.com      | 




