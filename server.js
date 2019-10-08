const express = require('express');

const AcctRouter = require('./accounts/acc-router.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', AcctRouter);

server.get('/', (req,res) => {
    res.send('<h3>DB Helpers with knex</h3>');
});

module.exports = server;