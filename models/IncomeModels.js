const mongoose=require("mongoose");

const IncomeSchema=mongoose.Schema({
    income:{
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

const incomemodel=mongoose.model("incomemodel",IncomeSchema)

module.exports=incomemodel;

