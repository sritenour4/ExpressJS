const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
})

// app.get('/', (req, res) => {
//     res.send("What's happening?");
// })

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);