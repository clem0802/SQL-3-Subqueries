
______________________________________________
| receipts                                   |
----------------------------------------------
| store_name      | employee_num  | total    | 
----------------------------------------------
| IER             | 1324          | 56.74    | //
----------------------------------------------
| Save and Shop   | 5656          | 98.94    |
----------------------------------------------
| Quick Fill      | 97            | 60       | 
----------------------------------------------
| Paperclips      | 44978         | 238.3    | 
----------------------------------------------
| Save and Shop   | 5560          | 125.43   | 
----------------------------------------------

// use "MIN" to select the employee number of the receipts with the lowest total
SELECT employee_num
FROM receipts
WHERE total = 
(
  SELECT MIN(total)
  FROM receipts
);
// employee_num
// 1324
---------------------------------------
  

// select the employee number of the receipts with a total less than the average
SELECT employee_num
FROM receipts
WHERE total <
(
  SELECT AVG(total) // 115.882
  FROM receipts
);

----------------------------
| employee_num  | total    | 
----------------------------
| 1324          | 56.74    | 
----------------------------
| 5656          | 98.94    |
----------------------------
| 97            | 60       | 






