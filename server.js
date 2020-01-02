const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const server = express();

const clientRouter = require('./client/client-router.js');
const ingestRouter = require('./ingest/ingest-router.js');

server.use(compression());
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/client', clientRouter);
server.use('/ingest', ingestRouter);

server.get('/', (req, res) => {
  res.send(
    "<h1>Welcome to Wheel Good! For the main site, please visit <a href='https://wheelgood.netlify.com'>wheelgood.netlify.com</a>.</h1>"
  );
});

module.exports = server;
