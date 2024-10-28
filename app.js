const express = require("express")
const app = express();
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(function(req,res,next){
    console.log("middleware")
    next();
})
app.get("/",function(req,res){
    res.render("index")
})
app.post("/form",function(req,res){
    console.log(req.body)
})




app.listen(3000);