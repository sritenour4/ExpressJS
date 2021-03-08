const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use('/', (req, res, next) => {
    let chirp = {username: req.body.username, message: req.body.message};
    fs.appendFileSync('chirps.json', JSON.stringify(chirp), (err) => console.log(err));
    next();
})

app.post('/formsubmissions', (req, res, next) => {
    res.send(`Username: ${req.body.username} Message: ${req.body.message}`);
});

// tell express where to run the server
app.listen(3000);



// #3 from lab - use the get method on the home url, respond with the string
// app.get('/', (req, res) => {
//     res.send("Hello from the web server side...");
// })