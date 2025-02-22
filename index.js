const express=require("express");

const port=8002;
const path=require("path");

const app=express();
const cookieparser=require("cookie-parser")

const mongoose = require('mongoose');

// const db=require("./config/mongoose")

mongoose.connect('mongodb+srv://sumitsvg9836:OCYibTjsM16AabZl@cluster0.8lhg9.mongodb.net/adminpaneldata').then((res) =>{
    console.log('db is connected is live')
})
.catch((err) =>{
    console.log(err);
})



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"assets")));
app.use(express.urlencoded());
app.use(cookieparser());

app.use("/",require("./routes/Auth"));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("server is runnig on port",port);
})