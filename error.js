// const route = require('router');
const express = require('express');

const route = express.Router();

route.use((req,res,next)=>{
    res.statusCode = 404;
    res.send('<h1>Page Not Found</h1>');
});
module.exports = route;
