DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT,
    product_name VARCHAR (30) NOT NULL,
    department_name VARCHAR (30) NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT (1000) NOT NULL,
    primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
    ("Tape", "office supplies", 5.00, 100),
    ("Apple", "food," 2.00, 100),
    ("Red bull", "beverage", 3.50, 200),
    ("Car", "automobile", 1000.00, 5),
    ("Dog", "animals", 50.55, 10),
    ("Pineapple", "food", 1.50, 120),
    ("Pens", "office supplies", 3.00, 175),
    ("Bottled Water", "beverage", 6.00, 400),
    ("Bicycle", "automobile", 80.95, 50),
    ("Bread", "food", 0.99, 600)



