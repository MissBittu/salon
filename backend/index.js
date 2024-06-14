const express = require('express');
const mongoose=require('mongoose')
const userModel= require('.//model/user')
const cors=require('cors')

const app= express();
require("dotenv").config();

const PORT= process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

const userRoutes = require('./routes/router')
app.use("/api/v2", userRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at port number ${PORT}`)
})

const dbConnect=require('./config/database')
dbConnect;

// app.post('/user',(req,res)=>{
//     userModel.create(req.json())
//     .then((result)=>console.log(result.json()))
//     .catch((err)=>console.log(err))
// })


app.get('/',(req,res)=>{
    res.send("<h1>Hello to Signup Page</h1>")
})

// app.get('/',(req,res)=>{
//     res.send("")
// })

