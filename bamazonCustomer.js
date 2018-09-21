var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

//connection test / start app
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
});



//Display all items available for sale . IDs. Names. and Price
function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    for (var i = 0; i < res.length; i++) {
      console.log("Product: " + res[i].product_name + '\n for $' + (res[i].price) + " per item. \nIn stock: " + res[i].stock_quantity + "\n")

    }
    buy();
  });
}

//prompt
//ask ID of product to buy
//how many units to buy
function buy() {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "Enter item name of product you like to buy:",
      },
      {
        name: "quantity",
        type: "input",
        message: "How many do you want to buy?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }

      }
    ])
    .then(function (answer) {
      console.log("Test")
      var userItem = answer.item;
      var userAmount = answer.quantity;

      connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
          if (res[i].product_name === userItem && res[i].stock_quantity >= userAmount) {

            var amount = userAmount * res[i].price
            console.log("You purchased " + userAmount + " of " + userItem + " for $" + amount)
            
            var newStock = res[i].stock_quantity - userAmount
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: newStock
                },
                {
                  product_name: userItem
                }
              ],
            )
          } else {
            console.log("Incorrect item name or desired amount to high");
          }
        }
      });


    })
    .then(function(){
      console.log("rerun start")
      //readProducts();
    })
}
