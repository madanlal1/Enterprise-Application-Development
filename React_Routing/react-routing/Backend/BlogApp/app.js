const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connect to mongoDB database
// mongoose.connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//             console.log("connecting to mongoDB server...")
// });

// middlewares
app.use(express.static("public/css"));
app.set("view engine", 'ejs')
app.set("views", "./views")


//routes
app.get("/", (req,res) => {
    res.render('Register')
})

app.get("/signin", (req,res) => {
    res.render('Signin')
})
app.get("/data", (req,res) => {
    res.render('Data')
})




// server configuration at port 3000
app.listen(3000, () => {
    console.log("server is listening at port 3000...")
})