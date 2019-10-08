const server = require('express').Router();

const db = require('../data/dbConfig')

server.get('/', (req, res)=>{
    db.select('*').from('accounts')
    .then(accounts =>{
        res.status(200).json(accounts);
    })
    .catch(error =>{
        res.satus(500).json(error);
    })
});

server.get('/:id', (req, res) =>{
    db.select('*')
    .from('accounts')
    .where('id', '=', req.params.id)
    .then(accounts =>{
        console.log('accounts')
        res.status(200).json(accounts);
    })
    .catch(error =>{
        res.status(500).json(error)
    })
});

server.post('/', (req, res)=>{
    const accountData = req.body;
    // const test = { name: 'account-14', budget: 4000.00 }
    db('accounts')
    .insert(accountData, 'id')
    .into('accounts')
    .then(id => {
        res.status(200).json(id);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});


// router.post('/', (req, res) => {
//     const postData = req.body;
//     // validate the data before saving it to the database. NEVER TRUST THE CLIENT!!
  
//     // insert into posts () values ()
//     // db.insert(postData, 'id').into('posts')
//     db('posts')
//       .insert(postData, 'id')
//       .then(ids => {
//         res.status(200).json(ids);
//       })
//       .catch(error => {
//         // remember to handle the error
//         res.status(500).json(error);
//       });
//   });
  
    
server.put('/:id', (req, res) => {
    db('accounts')
    .where({id: req.params.id})
    .update(req.body)
    .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

// router.put('/:id', (req, res) => {
//     db('posts')
//       .where({ id: req.params.id })
//       .update(req.body)
//       .then(count => {
//         res.status(200).json(count);
//       })
//       .catch(error => {
//         // remember to handle the error
//         res.status(500).json(error);
//       });
//   });
  

server.delete('/:id', (req, res) => {
    db('accounts')
    .where({id: req.params.id})
    .del()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

module.exports = server;