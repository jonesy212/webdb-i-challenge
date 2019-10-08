const server = require('./server.js');

const PORT = process.env.PORT || 4000;

const acctRoute = require('./accounts/acct')


server.use('/api/accounts' , (req, res, next) => {
    console.log('here',req.body)
    next()
  }, acctRoute)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
