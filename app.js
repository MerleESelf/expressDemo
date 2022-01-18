const express = require("express");
const morgan = require("morgan");
const path = require("path")

const app = express();

const ingredients =[
'egg',
'garlic',
'rice',
'green onion',
'brogle'
];
//egg is actually the zeroth element in this array, so to reference first
//element we need to subtract 1 from whatever ID the user requests

//Logging middleware
app.use(morgan("dev"));
//within function call it uses next which means we don't have to add manually
//Static middleware
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res) => {
    res.send("<h1>Hello!!</h1>");
})

app.get("/ingredients", (req,res) => {
    res.send(ingredients)
})

app.get("/ingredients/:id", (req,res) => {
    console.log('req.params',req.params)
    const index = req.params.id - 1; 
    //whatever value is stored is stored within req.params object
    const ingredientName = ingredients[index]
    res.send(`<h1>${ingredientName}</h1>
    <img src= "/${ingredientName}.jpeg">`)
})
//http://localhost:3000/ingredients/1 returns garlic


app.listen(3000);