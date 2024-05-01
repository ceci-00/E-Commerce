# E-Commerce
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This is the back end for an e-commerce site that uses an Express.js API configured to use Sequelize in order to interact with a MySQL database.

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)

## Installation
After cloning this repository install dependencies by entering the following in your terminal:

```terminal
npm install
```
```terminal
mysql -u root -p
```
Input MySQL credentials
```terminal
use ecommerce_db
```
```terminal
source db/schema.sql
```
Exit MySQL shell
```terminal
npm run seed
```
Start application:
```terminal
npm run start
```
Use Insomnia to reveal data from GET, POST, PUT and DELETE operations for each route.

## Usage
The app uses create, read, update, and delete operations for each of the following routes: categories, products, and/or tags.
[Usage Demonstration](<./assets/.mp4>)

## License
[License: MIT](https://opensource.org/licenses/MIT)

## Credits
https://www.npmjs.com/package/mysql2

https://www.npmjs.com/package/sequelize

https://www.npmjs.com/package/dotenv


## Contact
Github Repo - https://github.com/ceci-00/Verbalize
Email - ceci.ga003@gmail.com


> **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how to create the schema from the MySQL shell.

* The walkthrough video must demonstrate how to seed the database from the command line.

* The walkthrough video must demonstrate how to start the application’s server.

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.
