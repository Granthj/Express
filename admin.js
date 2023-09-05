const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const product = [];
    
router.get('/add-product',(req,res,next)=>{
    res.render('admin1',{title: 'Product Page'});
    // res.sendFile(path.join(__dirname,'view','product.html'));
    // res.send('<form action="/product" method="POST"><input type="text" name"title"><button type="submit">submit</button>');
});
router.post('/add-product',(req,res,next)=>{
        product.push({title: req.body});
        res.redirect('/shop');
    });


exports.routes = router;
exports.products = product;
// module.exports = router;