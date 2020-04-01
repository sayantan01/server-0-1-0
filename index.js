
//App and routing
const express=require('express');
const axios=require('axios');

//mongodb
require('./services/mongodb_util');
const Books=require('./models/Books');

//port
const port=process.env.PORT || 5000;

//express app created
const app=express();

//routes
app.get('/test',(req,res)=>res.send("Hello World"));

//Start listening
app.listen(port,()=>console.log("Backend listening"));
