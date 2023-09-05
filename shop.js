const express = require('express');
const path = require('path');
const adminData = require('./admin');
const router = express.Router();

router.use('/shop',(req,res,next)=>{
    console.log(adminData.products);
    // res.render('template',{headLine: 'Welcome To My Shop Page',title: "Shop page"});
    res.sendFile(path.join(__dirname,'view','shop1.html'));
    // res.send('<h1>Shop page</h1>');
});

module.exports = router;