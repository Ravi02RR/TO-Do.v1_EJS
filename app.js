const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = [];
let workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", function (req, res) {
    let day = date();


    res.render("list", { kindofDay: day, newListitems: items });


});

app.get("/work", function (req, res) {
    res.render("list", { kindofDay: "Work List", newListitems: workItems });

});









// app.post("/", function (req, res) {
//     let item = req.body.newItem;
//     items.push(item);
//     res.redirect("/");
// });


// app.post("/work", function (req, res) {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");

// });









// instead of writing this two seprate

app.post("/", function (req, res) {

    let item = req.body.newItem;
    if (req.body.List === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }



});



app.listen(3000, function () {
    console.log("Server started on port 3000.");
});