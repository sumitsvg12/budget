
const incomemodel = require("../models/IncomeModels");
const expensemodel = require("../models/ExpenseModels");

module.exports.budgettracker = async (req, res) => {
    try {

        if (req.cookies.user) {
            let incomeData = await incomemodel.find({ userid: req.cookies.user._id });
            let expenseData = await expensemodel.find({ userid: req.cookies.user._id });
            var expense = 0;
            var labelnames = [];
            var labelprice = [];

            expenseData.map((v, i) => {
                expense += parseInt(v.price),
                    labelprice.push(v.price)
                labelnames.push(v.title);
            })

            return res.render("budgettracker", {
                "incomeData": incomeData[0],
                expenseData,
                expense,
                labelnames,
                labelprice

            });
        }
        else {
            return res.redirect("/")
        }

    }
    catch (err) {
        console.log(err)
        return res.redirect("back")
    }
}
module.exports.insertincome = async (req, res) => {
    try {
        req.body.userid = req.cookies.user._id
        let incomedata = await incomemodel.create(req.body);
        if (incomedata) {
            return res.redirect("back")
        }
        else {
            console.log("something is wromg");
            return res.redirect("back");
        }
    }
    catch (err) {
        console.log(err)
        return res.redirect("back")
    }
}
module.exports.insertexpense = async (req, res) => {
    try {
        req.body.userid = req.cookies.user._id;
        let expensedata = await expensemodel.create(req.body);
        if (expensedata) {
            return res.redirect("back")
        }
        else {
            console.log("something is wromg");
            return res.redirect("back");
        }
    }
    catch (err) {
        console.log(err)
        return res.redirect("back")
    }
}
module.exports.deletebudget = async (req, res) => {
    try {
        // console.log(req.query.budgid);
        let id = req.query.budgid;
        await expensemodel.findByIdAndDelete(id);
        return res.redirect("back");
    }
    catch (err) {
        console.log(err)
        return res.redirect("back")
    }
}
module.exports.updatebudget = async (req, res) => {
    try {
        // console.log(req.params.id);
        let dataofexpense = await expensemodel.findById(req.params.id);
        return res.render("editbudget", {
            dataofexpense
        })
    }
    catch (err) {
        console.log(err)
        return res.redirect("back")
    }
}
module.exports.editexpense = async (req, res) => {
    try {
        // console.log(req.params.id);
        let editmodal=await expensemodel.findByIdAndUpdate(req.body.budgid,req.body);
        // console.log(editmodal);
        return res.redirect("/budget");
    }
    catch (err) {
        console.log(err)
        return res.redirect("back")
    }
}