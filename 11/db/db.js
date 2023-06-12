const MySql = require('mysql2');
const dbconfig = require('./db.config');

const connection = MySql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
});

//open the connection
connection.connect(error =>{
    if(error) throw error;
    console.log("connected to DB");
    //create DB option 1
});

module.exports = {connection};