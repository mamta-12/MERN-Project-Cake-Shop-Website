const express = require("express");

const app =express();
const db= require("./db.js");

const usersRoute= require('./routes/usersRoute')

app.use(express.json())

 app.use('/api/users/',usersRoute);
const port= process.env.PORT ||5000;

app.listen( port,()=>console.log("node js server start"));