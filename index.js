const express=require('express');

const app=express();

app.use(express.json({extended:false}));

const connectDb=require('../Password Getter/config/db');

connectDb();
const mainrouter=require('./services/outroutes');

app.use('/',mainrouter);

// on / it goes to /components/passwords/routes.js

app.listen(3000,()=>
    console.log("Server running at port 3000"));