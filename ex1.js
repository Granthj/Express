const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/product'){
        // res.write('<h1>This is home Page</h1>');
        console.log(req.url);
        console.log('product page');
        
        // req.statusCode = 302;
        res.writeHead(302,{Location:'/home'});
        return res.end();
    }
    else if(req.url === '/home'){
        res.write('<h1>This is home Page</h1>');
        console.log(req.url);
        console.log('home page');
        return res.end();
    }
    else if(req.url === '/'){
        res.write('<h1>This is root Page</h1>');
        console.log(req.url);
        console.log('root page');
        return res.end();
    }
});
server.listen(3000);