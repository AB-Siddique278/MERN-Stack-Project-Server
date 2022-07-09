// require("dotenv").config();
// const express = require("express");
// const app = express();
// const mongoose = require('mongoose');
// require("./db/Conn");
// const users = require("./models/userSchema")
// const cors = require("cors");
// const router=require("./routes/router");
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// app.use(router);


// app.listen(port,()=>{
//     console.log(`server is rnning ${port}`);
// });




require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("this is server start")
})

app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});











//1wGgCkpSmNhdt3sf
//siddique