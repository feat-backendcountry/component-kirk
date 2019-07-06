const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();
const port = 5000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, () => console.log(`Listening to port ${port}`));

// app.get('/recommended/:id', (req, res) => {
//   // add db helpers?
// })
