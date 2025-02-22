
const user=require("../models/userModels");
const { use } = require("../routes/Auth");

module.exports.signup=async(req,res)=>{
    try{
        res.render("signup");
    }
    catch(err){
        console.log(err);
        return res.redirect("back")
    }
}
module.exports.insertuser=async(req,res)=>{
    try{
    //    console.log(req.body)
    let checkemail=await user.findOne({email:req.body.email});
    if(!checkemail){
        if(req.body.password==req.body.confirm_password){
           let regiteruser=await user.create(req.body);
           if(regiteruser){
            console.log("user regiter successfull");
            return res.redirect("/")
           }
           else{
            console.log("user not register");
            return res.redirect("back")
           }
        }
        else{
            console.log("password and confirm password not match");
            return res.redirect("back")
        }
    }
    else{
        console.log("email is already regiter try another email")
        return res.redirect("back")
    }
    }
    catch(err){
        console.log(err);
        return res.redirect("back")
    }
}
module.exports.signin=async(req,res)=>{
    try{
        res.render("signin");
    }
    catch(err){
        console.log(err);
        return res.redirect("back")
    }
}
module.exports.signinuser=async(req,res)=>{
    try{
    //    console.log(req.body);
      let exitemail=await user.find({email:req.body.email}).countDocuments();
    //   console.log(exitemail)
      if(exitemail==1){
           let userData=await user.findOne({email:req.body.email})
           if(userData.password==req.body.password){
              res.cookie("user",userData);
            //   console.log("login succefull")
              return res.redirect("/budget");
           }
           else{
            console.log("password is not match");
            return res.redirect("back")
           }
      }
      else{
        console.log("email is not exit");
        return res.redirect("back")
      }
    }
    catch(err){
        console.log(err);
        return res.redirect("back")
    }
}