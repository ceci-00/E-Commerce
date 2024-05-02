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
Node.js and SQL is required. After cloning this repository, change the .env variables to your own MySQL credentials. Install dependencies by entering the following in your terminal:

```terminal
npm init -y
```
```terminal
npm install
```
Open MySQL shell:
```terminal
mysql -u root -p
```
Input MySQL credentials

Create Database:
```terminal
source db/schema.sql
```
Exit MySQL shell
```terminal
quit
```
Seed Data:
```terminal
npm run seed
```
Start application:
```terminal
npm start
```
Use Insomnia to reveal data from GET, POST, PUT and DELETE operations for each route.

## Usage
The app uses create, read, update, and delete operations for each of the following routes: categories, products, and/or tags.
<img src=./assets/e-commerce-ss.png>

[Usage Demonstration](<./assets/e-commerce-vid.mp4>)

## License
[License: MIT](https://opensource.org/licenses/MIT)

## Credits
https://www.npmjs.com/package/mysql2

https://www.npmjs.com/package/sequelize

https://www.npmjs.com/package/dotenv

https://github.com/coding-boot-camp/fantastic-umbrella

## Contact
Github Repo - https://github.com/ceci-00/Verbalize
Email - ceci.ga003@gmail.com