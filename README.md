# Bamazon
## Creating an Amazon-like storefront app with Node.js and MySQL. The app will take in orders from customers and deplete stock from the store's inventory, track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

## Supporting Files
* `schema.sql`
    - Stores MySQL scripts to be excuted on MySQL Workbench.
    - Introduces required database, tables, columns and data types we will use for the app
        * Database: bamazon_db
        * Tables:
            - products
* `bamazonManager.js`
    - Node application handles the orders from customers and depletes stock from the store's inventory

## Initialize the Project
* run command: `npm init` or `npm init -y` (by default)

## Install required modules
* run command: (`npm i request`)[https://www.npmjs.com/package/request]
* run command: (`npm i inquirer`)[https://www.npmjs.com/package/inquirer/v/5.0.1]
* run command: (`npm i mysql`)[https://www.npmjs.com/package/mysql]


