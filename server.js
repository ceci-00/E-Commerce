const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
// set up port and app
const app = express();
const PORT = process.env.PORT || 3001;
// turn on express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});