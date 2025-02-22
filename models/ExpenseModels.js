const mongoose=require("mongoose");

const ExpneseSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true
     },
     userid:{
        type:String,
        required:true
     }

},{
    Timestamps:true
})

const expensemodel=mongoose.model("expensemodel",ExpneseSchema)

module.exports=expensemodel;

