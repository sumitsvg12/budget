const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
     username:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
    password:{
        type:String,
        required:true
     },

},{
    Timestamps:true
})

const user=mongoose.model("user",UserSchema)

module.exports=user;

