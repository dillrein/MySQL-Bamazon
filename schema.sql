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





