const mongoose = require("mongoose");

const DB ="mongodb+srv://siddique:1wGgCkpSmNhdt3sf@cluster0.kw6ah.mongodb.net/mernstack?retryWrites=true&w=majority"


mongoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));