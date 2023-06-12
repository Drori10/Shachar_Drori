const SQL = require('./db');
const mysql2 = require('mysql2');

const createTable = (req,res) =>{
    const Q1 = "CREATE TABLE usersAA (id INT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255));"; //sql syntax
    SQL.query(Q1,(err,mysqlres)=>{
        if (err) throw err;
        console.log("table created");
    });
};

module.exports = {createTable};