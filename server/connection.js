const Sequelize = require('sequelize');
require('dotenv').config();
const Ninja = require('./models/ninja_model');

const database = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;
const dialect = process.env.MYSQL_DIALECT;

const connection = new Sequelize(database, user, password, {
    host: host,
    dialect: dialect   
});

Ninja.init(connection)


/*
teste de conexao

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 */

 module.exports = connection;