const express=require("express");

const routes=express.Router();

console.log("budget");

const budgetctl=require("../controllers/budgetcontrollers");

routes.get("/",budgetctl.budgettracker);
routes.post("/insertincome",budgetctl.insertincome);
routes.post("/insertexpense",budgetctl.insertexpense);
routes.get("/delectbudget",budgetctl.deletebudget);
routes.get("/updatebudget/:id",budgetctl.updatebudget);
routes.post("/editexpense",budgetctl.editexpense);

module.exports=routes;