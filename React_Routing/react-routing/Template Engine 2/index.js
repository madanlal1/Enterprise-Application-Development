const express = require('express');
const mongoose = require('mongoose');

const server = express();

server.set('view engine', 'ejs');

server.use('/', express.static('public/css/'));

mongoose.connect('mongodb://127.0.0.1:27017/Faculty', () => {
    console.log("database connected successfully...")
})


server.get('/', (req,res)=> {
    res.render('SignUp');
})
server.get('/signin', (req,res)=> {
    res.render('SignIn');
})




server.listen(3000, () => {
    console.log('server is listening at port 3000');    
})
