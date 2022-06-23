const { resolveSoa } = require('dns');
const { listenerCount } = require('events');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('public'));

let data = fs.readFileSync('words.json');
let words = JSON.parse(data);

app.get('/flower', (req,res) => {

    res.send(`I love flower too.`);
})

app.get('/flower/:name', (req,res) => {
    const data = req.params;
    res.send(`I love ${data.name} too.`);
})

app.get('/flower/:name/:num', (req,res) => {
    let data = req.params;
    let num = data.num;
    let reply = "";
    for(let i=0; i<num; i++) {

        reply += "I love " + data.name + " too.<br/>";
    }
    res.send(reply);
})

app.get('/add/:word/:score?', (req,res) => {
    let data = req.params;
    let word = data.word;
    let score = Number(data.score);
    let reply;
    
    if(!score) {
        reply = {
            msg : "Score is required!!!"
        }
        
    } else {

        words[word] = score;
        let data = JSON.stringify(words,null,2);
        fs.writeFile('words.json',data, () => {
            reply = {
                msg: "Thank you for adding word"
            }

        } )

    }
    
    res.send(reply);    

})

app.get('/search/:word/', (req,res) => {
    let word = req.params.word;
    let reply;

    if(words[word]) {
        reply = {
            status : "word found.",
            word : word,
            score : words[word]
        }

    }
    else {

        reply = {
            status : "word not found!",
            word : word,
        }
    }
    res.send(reply);
})

app.get('/all', (req,res) => {
    
    res.send(words);
})





app.listen(3000, () => {
    console.log("server is listening on port 3000");
})