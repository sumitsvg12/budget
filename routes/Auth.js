const express=require("express");

const routes=express.Router()

const user=require("../models/userModels");

const authctl=require("../controllers/authctl");

routes.get("/signup",authctl.signup)
routes.post("/insetuser",authctl.insertuser)
routes.get("/",authctl.signin)
routes.post("/signinuser",authctl.signinuser);
routes.use("/budget",require("./budgetroutes"))

module.exports=routes;