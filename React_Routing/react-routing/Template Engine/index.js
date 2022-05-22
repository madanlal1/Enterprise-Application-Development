const express = require('express');
const pug = require('pug');

const server = express();

server.set('view engine', 'ejs');

express.static

server.get('/', (req,res)=> {
    // res.send('hellow everyone');
    const product = [1,2,3,4,5,6,7,8,9,10];
    res.render('home', {name: 'Madan', product});
})

server.get('/about', (req,res)=> {
    res.render('about');
})

server.get('/blog', (req,res)=> {
    res.pug.render('blog')
})

server.listen(3000, () => {
    console.log("Express Server is running on server 3000");
})