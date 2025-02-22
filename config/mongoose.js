const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/userdata");

const db=mongoose.connection;

db.once("open",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("db is connect");
})

module.exports=db;