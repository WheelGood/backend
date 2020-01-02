const express = require('express');
const Ingest = require('./ingest-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  Ingest.find()
    .then(response => {
      res.status(200).json({ message: 'Route working', data: response });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Route not working', error });
    });
});

router.post('/', async (req, res) => {
  Ingest.insertOrUpdate(req.body)
    .then(response => {
      res.status(200).json({ message: 'Ingest working', data: response });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Ingest not working', error });
    });
});

module.exports = router;
