const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();
const port = 5000;

const db = require('../database/index.js');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Listening to port ${port}`));

app.get('/recommended/', (req, res) => {
  db.find({}).sort({ id: 'asc' })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
})

app.get('/recommended/:id', (req, res) => {
  const { id } = req.params;
  db.find({ id })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
})
