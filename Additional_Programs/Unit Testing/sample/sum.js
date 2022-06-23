const express = require('express');
const app = express();

app.get('/getProduct', (req,res) => {
    res.status(200).json({
        Mobile : 2000
    })
})

const sum = (a,b) => {
    return a+b;
} 


module.exports = {sum,app}
