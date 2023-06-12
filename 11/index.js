const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const SQL = require('./db/db');
const createDB = require('./db/CreateDB_CRUD');
const port = 4200;

app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routing
app.get('/',(req,res)=>{
    res.send("hi DBil");
});

//create DB option 2
//option 3- CRUD
app.get('/createTable',createDB.createTable);

// set up listen
app.listen(port, ()=>{
    console.log("server is running on port:",port);
});

