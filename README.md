# Bamazon
## Creating an Amazon-like storefront app with Node.js and MySQL. The app will take in orders from customers and deplete stock from the store's inventory, track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

## Supporting Files
* `schema.sql`
    - Stores MySQL scripts to be excuted on MySQL Workbench.
    - Introduces required database, tables, columns and data types we will use for the app
        * Database: bamazon_db
        * Tables: products
* `bamazonManager.js`
    - Node application handles the orders from customers and depletes stock from the store's inventory

## Initialize the Project
* run command: `npm init` or `npm init -y` (by default)

## Install required modules
* run command:[npm i request](https://www.npmjs.com/package/request)
* run command:[npm i inquirer](https://www.npmjs.com/package/inquirer/v/5.0.1)
* run command:[npm i mysql](https://www.npmjs.com/package/mysql)


## Demo # 1 - show Insufficient Quantity
### On *terminal* 
1. Run: `node bamazonCustomer.js`
2. Enter a customer's *name*
    - Jia
3. Enter *item ID* to purchase
    - 8
4. Enter *quantity* to purchase
    - 3
    * order quantity(3) is greater than stock quantity (2)
-**End goal** 
* Expect App prompts **"Insufficient quantity!"** message to the customer
* see demo video [here](https://drive.google.com/file/d/1_Mp-exGz9eQnOevTZN9cxC8pnh06KsXX/view)


## Demo # 2 - Show a Successful Order
### On *terminal* 
1. Run: `node bamazonCustomer.js`
2. Enter a customer's *name*
    - Jia
3. Enter *item ID* to purchase
    - 4
4. Enter *quantity* to purchase
    - 80
-**End goal** 
* Expect App prompts **"item added!"** message to the customer
* Expect *stock_quantity* for *item_id* = 4 is updated to *120* in table products.

* see demo video [here](https://drive.google.com/file/d/1QlOqM48Q0fJwrqo3EequHiMTz6JC3rQJ/view)
