const express = require('express');
const Ingest = require('./ingest-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  Ingest.find()
    .then(response => {
      console.log(response);
      res.status(200).json({ message: 'Route working', data: response.data });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Route not working' });
    });
});

router.post('/', (req, res) => {
  Ingest.insertOrUpdate(req.body)
    .then(response => {
      console.log(response);
      res.status(200).json({ message: 'Ingest working', data: response.data });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Ingest not working' });
    });
});

module.exports = router;
