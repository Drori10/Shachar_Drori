// import and setup
const express = require ('express');
const path = require('path');
const app = express();
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));

//routing
app.get('/', (req,res)=>{
    res.send("Hi Day8");
});

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});

