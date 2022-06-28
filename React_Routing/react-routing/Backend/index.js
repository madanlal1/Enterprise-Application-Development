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

// const express = require('express');

// const path = require('path');

// const app = express();

// app.use(express.static('public'));

// app.get('/', (req,res) => {

//     res.sendFile(path.resolve(__dirname, './public/components/Home.html'))
//     // res.status(200).json({result:'success'})
// })

// app.get('/about', (req,res) => {

//     res.sendFile(path.resolve(__dirname, './public/components/About.html'));
// })

// app.get('*', (req,res) => {

//     res.status(404).json({msg:'Page Not Found!'})
// })

// app.listen(3000, function() {
//     console.log('server is listening at port 3000')
// })

// ------------------------------------------------------->>

// OS Module

// const os = require('os');

// console.log("OS Platform: ",os.platform());
// console.log("OS CPU Architecture: ",os.arch());
// console.log("Number of Logical CPUs Cores: ",os.cpus());
// console.log("Host Name: ",os.hostname());
// console.log("Home Directory: ",os.homedir());
// console.log("Current Version: ",os.version());

// -------------------------------------------------------->>

// establishing mongoDB connection

// const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/Madan', {useNewUrlParser : true, useUnifiedTopology: true}).then( () => {
//     console.log('connection build successfully...');
// }).catch(err => console.log(err) );

// ----------------------------------------------------------<<

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://admin:admin@cluster0.2oxj55a.mongodb.net/registration?retryWrites=true&w=majority').then(() => console.log('database connected successfully')).catch(err => console.log(err))

const Schema = mongoose.Schema({
    username : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    }
})

const User = mongoose.model('user',Schema);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './public/components/Register.html'))
})

app.post('/insertData', async (req,res) => {
    
    const {username,password} = req.body;

    if(!username || !password) {
        res.status(400).json({error: "Username or password missing!!!"})
    }
    else {

        // Data Insertion...
        // const user = new User({username:username, password:password})
        // user.save().then(() => {
        //     res.sendFile(path.resolve(__dirname, './public/components/Home.html'))
        // }).catch(err => console.log(err+"ISSUE HERE"))
        
        // retrieve data
        const login = await User.find({username,password});

        if(login) {
            
            // res.redirect('/insertData')
            res.status(200).json({msg:"You are logon successfully"})
            
        }
        else {
            // res.redirect('/')
            res.status(400).json({err:"Invalid credintials"})
        }
        

    }

    // app.get('/insertData', (req,res) => {
    //     res.sendFile(path.resolve(__dirname, './public/components/Home.html'))
    // })


    console.log(req.body)
    // res.sendFile(path.resolve(__dirname,'./public/components/Home.html'))
    // res.send("Hello "+req.body.username)
    // res.status(200).json({msg:"Thankyou for signin"}) 
})

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})