const express = require('express');
const path = require('path');
let app = express();

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.use(express.static(path.join(__dirname, '../public')));


app.listen(3000);