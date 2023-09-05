const express = require('express');
const app = express();
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name"title"><button type="submit">submit</button>');
});
console.log('repeat');
app.use('/product',(req,res,next)=>{
    // res.send('<h1>Hello</h1>');
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello</h1>');
});
app.listen(8000);