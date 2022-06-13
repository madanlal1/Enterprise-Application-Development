const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const session = require('express-session');
const env = require('dotenv');

env.config();

mongoose.connect("mongodb://localhost:27017/NewDB", {useNewUrlParser : true});

const userSchema = new Schema({
    username : {type: String, unique: true},
    password : {type: String}
})

const User = mongoose.model("User", userSchema);


// middleware
app = express();
// app.use(express.static(process.env.))
app.use(bodyParser.urlencoded({extended : true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));



app.get('/', (req,res) => {

        res.send("hellow world");
})

app.get('/test', (req,res) => {

        req.session.test ? req.session.test++ : req.session.test=1;
        res.send(req.session.test.toString());
})



app.listen(process.env.PORT, () => {
    console.log("server is running on port ", process.env.PORT);
})
