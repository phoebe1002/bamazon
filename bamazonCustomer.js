var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon_db"
  });

connection.connect(function(err) {
	if (err) throw err;
	//Testing:
	//console.log("connected as id " + connection.threadId);
	querySaleProducts();
	
});

// first display all of the items available for sale. Include the ids, names, and prices of products for sale.

function querySaleProducts() {
	inquirer
	.prompt({
		name: "customer_name",
		type: "input",
		message: "Dear Customer, please enter your name."
	})
	.then(function(answer) {
		console.log("Welcome to Bamazon, " + answer.customer_name + ":) Here is our special sales for you!");

		var query = "SELECT * FROM products WHERE stock_quantity <> 0";

		connection.query(query, function(err, res) {
		
		for (var i = 0; i < res.length; i++) {
			console.log("Item ID: " + res[i].item_id + " | " + res[i].department_name + ": " + res[i].product_name  + " for $" + numberWithCommas(res[i].price));
		}

		queryOrder();
		});	
	});
}		

// Order from the list
function queryOrder() {
	inquirer
	.prompt([
		{
		name: "order_id",
		type: "input",
		message: "Please enter the item ID you want to purchase.",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return false;
		}
		},
		{
		name: "order_quantity",
		type: "input",
		message: "Please enter the quantity you want to purchase.",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return false;
		}
		}
	])
	.then(function(answer) {

		var query = "SELECT * FROM products WHERE ?";

		connection.query(query, { item_id: answer.order_id }, function(err, res) {
		//	console.table(res);
			var i = 0;
		if(answer.order_quantity > res[i].stock_quantity){
			console.log("Insufficient quantity!");
			console.log("We only have " + res[i].stock_quantity + " '" + res[i].product_name + "' left in stock!")
		} 
		else{
			var cartTotal = answer.order_quantity * res[i].price;
			console.log("'" + res[i].product_name + "' is added to your cart");
			console.log("Cart total: $" + parseFloat(numberWithCommas(cartTotal)).toFixed(2));

			var stockLeft = res[i].stock_quantity - answer.order_quantity 
			updateStock(stockLeft, answer.order_id);
		}
		});
	});
}

function updateStock(sold, target) {
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: sold
      },
      {
        item_id: target
      }
    ],
    function(err, res) {
			console.log("Testing purpose: " + res.affectedRows + " products updated!\n");
    }
	);
}

// Format price with comma separator
const numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}