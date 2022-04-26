// HTTP Server 

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function(req,res) {

//     if(req.url == '/home') {
        
//         const homepage = fs.readFileSync('./components/Home.html')
//         // res.write("Hello! from something");
//         res.end(homepage);
//     }
//     else if(req.url == '/about') {

//         const aboutpage = fs.readFileSync('./components/About.html')
//         // res.write("Hello! from ABC");
//         res.end(aboutpage);
//     }
//     else {
        
//         res.write("Hello! from Node");
//         res.end();
//     }
// })

// server.listen(3000, function() {
//     console.log('server is listening at port 3000');
// })

// ---------------------------------------------------------<<

// Express Server

const express = require('express');

const path = require('path');

const app = express();

app.use('/',express.static('public/'));

app.get('/', function(req,res) {

    res.sendFile(path.resolve(__dirname, './public/components/Home.html'))
    // res.status(200).json({result:'success'})
})

app.get('/about', function(req,res) {

    res.sendFile(path.resolve(__dirname, './public/components/About.html'));
})

app.get('*', function(req,res) {

    res.status(404).json({msg:'Page Not Found!'})
})

app.listen(3000, function() {
    console.log('server is listening at port 3000')
})