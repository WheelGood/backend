require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 8888;

server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`);
});
