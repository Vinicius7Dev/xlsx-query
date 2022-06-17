import express from 'express';

const SERVER_PORT = 3333;

const server = express();

server.get('/', (req, res) => res.json({ message: 'Success!' }));

server.listen(SERVER_PORT, () => {
  console.log(`===> Server started on port ${SERVER_PORT}`);
});
