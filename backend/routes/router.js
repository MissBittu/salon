const express = require('express');

const router=express.Router();

const {createUser} = require("../controller/createUser")
router.post("/createUser" , createUser);


const {checkUser} = require("../controller/checkUser")
router.post("/checkUser" , checkUser);



// const {login} = require("../controller/login")
// router.post("/login" , login);

module.exports=router;