------------------------------------------- (WHERE)

______________________________________
| orders                             |
--------------------------------------
| customer_id | orderDate  | total   |
--------------------------------------
| 1           | 1/20/2022  | 300.43  |
--------------------------------------
| 3           | 1/01/2022  | 101.23  |
--------------------------------------
| 7           | 1/02/2022  | 25.03   |
--------------------------------------
| 7           | 2/02/2022  | 525.03  |
--------------------------------------
| 8           | 1/01/2022  | 101.23  |
--------------------------------------
| 9           | 1/02/2022  | 25.03   |
--------------------------------------

SELECT customer_id
FROM orders
WHERE total = 
(
  SELECT MAX(total)
  FROM orders
);
// customer_id
// 7


------------------------------------------- (IN)
// "IN" works on "lists"
// this subquery will return multiple rows, but only 1 column
// subqueries can also return several rows
// only customer_id #1 is chosen => the only identical number in both tables
__________________________________________________________
| customers                                              |
----------------------------------------------------------
| id | first_name  | last_name  | email                  |
----------------------------------------------------------
| 1  | James       | Butt       | jbutt@gmail.com        |
----------------------------------------------------------
| 2  | Josephine   | Darakjy    | josephine_da@da.org    |
----------------------------------------------------------
| 4  | Lenna       | Paprocki   | l-pap@hotmail.com      |
----------------------------------------------------------
| 5  | Donette     | Foller     | donette.foller@cox.net |
----------------------------------------------------------
| 6  | Simona      | Morasca    | simona@morasca.com     |
----------------------------------------------------------

______________________________________
| orders                             |
--------------------------------------
| customer_id | orderDate  | total   |
--------------------------------------
| 1           | 1/20/2022  | 300.43  |
--------------------------------------
| 3           | 1/01/2022  | 101.23  |
--------------------------------------
| 7           | 1/02/2022  | 25.03   |
--------------------------------------
| 7           | 2/02/2022  | 525.03  |
--------------------------------------

SELECT first_name, last_name
FROM customers
WHERE customers.id IN
(
  SELECT customer_id
  FROM orders
)
// first_name | last_name
// James      | Butt
  


------------------------------------------- (IN)
____________________________________
| departments                      |
------------------------------------
| id | department_name   | budget  |
------------------------------------
| 1  | Administration    | 4033    | 
------------------------------------
| 2  | Marketing         | 223     | 
------------------------------------
| 3  | Purchasing        | 7678    | 
------------------------------------
| 4  | Human Resources   | 2342    | 
------------------------------------

_________________________________________________
| employees                                      |
--------------------------------------------------
| employee_id | name             | department_id |
--------------------------------------------------
| 100         | Steven King      | 9             | 
--------------------------------------------------
| 101         | Neena Koohhar    | 9             | 
--------------------------------------------------
| 102         | Lex De Haan      | 1             | 
--------------------------------------------------
| 103         | Alexander Hunold | 2             | 
--------------------------------------------------
| 104         | Bruce Ernst      | 6             | 
--------------------------------------------------

// find the employees that are in a department with a budget over 2000
SELECT *
FROM employees
WHERE department_id IN
(
  SELECT id
  FROM departments
  WHERE budget > 2000
);
// employee_id   name          department_id
// 102           LexDe Haan    1   (=> Administration)



-------------------------------------------
// this query selects => the employees with a dpt NOT in the "departments" table
SELECT * FROM employees
WHERE department_id NOT IN
(
  SELECT id
  FROM departments
)
  
  
  
  
  
  

