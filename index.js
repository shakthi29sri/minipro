const express = require("express");
const app = express();//creates an express application
app.use(express.static('public'));
app.set('view engine','ejs');//Embedded JavaScript Templating
 
 app.get('/interest',(req,res)=>{
    res.render("interest");
});
app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/login',(req,res)=>{
    res.render("login");
});
app.get('/register',(req,res)=>{
    res.render("register");// sends the rendered HTML string to the client.
});
 

app.listen(3101);
//node index.js
