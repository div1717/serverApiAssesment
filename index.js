const express=require('express');
const db=require("./database/db");
const app=express();
const port='8081';

const routers=require('./routes/routers.js');

const cors = require('cors');
app.use(express.json());
app.use(cors());


// const fillData = require('./database/dbExtractor');
// fillData();


app.use('/users',routers);





app.listen(port,()=>{
    console.log("Listening");
});