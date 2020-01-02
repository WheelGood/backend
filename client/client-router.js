const express = require('express');
const Client = require('./client-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  Client.find()
    .then(response => {
      console.log(response);
      res.status(200).json({ message: 'Route working', data: response });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Route not working', error });
    });
});

module.exports = router;
