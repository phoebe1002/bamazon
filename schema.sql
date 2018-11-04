DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(255) NOT NULL,
  price DECIMAL(19,2) NOT NULL,
  stock_quantity INT
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
('Apple 15 Inch MacBook Pro Laptop', 'Eletronics', 1174.99, 5),
('Mid-Century Modern Leather Sofa', 'Furniture', 1047.00, 10),
('Hand stamped utensils', 'Handmade', 40.00, 8),
('Hand stamped vintage spoon', 'Handmade', 5.99, 200),
('Graphing Calculator', 'Eletronics', 120.95, 10),
('Bento Box', 'Home & Kitchen', 24.85, 50),
('Premium Clumping Cat Litter', 'Pet Supplies', 17.48, 20),
('Mid-Century Modern Side Chair', 'Furniture', 70.00, 2),
('Pet Training Pads', 'Pet Supplies', 5.99, 20),
('18-Piece Dinnerware Set', 'Home & Kitchen', 36.72, 15);


SELECT * FROM products;

SELECT * FROM products WHERE stock_quantity <> 0;

-- testing valiable products
/*INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
('Vintage Dining Table', 'Home & Kitchen', 800, 0);
*/

-- expecting stock_quantity = 120
SELECT * FROM products WHERE item_id = 4;

