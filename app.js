require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("./db/Conn");
const users = require("./models/userSchema")

//const DB ="mongodb+srv://siddique:1wGgCkpSmNhdt3sf@cluster0.kw6ah.mongodb.net/mernstack?retryWrites=true&w=majority"

const port = 8000;

app.listen(port,()=>{
    console.log(`server is rnning ${port}`);
});

//1wGgCkpSmNhdt3sf
//siddique