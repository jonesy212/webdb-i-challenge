// const express = require('express')

// const db = require('../data/dbConfig')

// const router = express.Router();

// router.get('/', (req, res) => {
//     console.log(req.query)
//     db.select(req.query)
//     .then(accts => res.status(201).json(accts))
//     .catch(er =>{
//         console.log(er)
//         res.status(400).json({
//             message:"error finding accounts"
//         })
//     })
// })

const express = require('express')

const db = require('../data/daConfig')

const router = express.Router();

router.get('/', (req, es) =>{
    console.log(req.query)
    db.select(req.query)
    .then(accts => res.status(201).json(accts))
    .catch(error =>{
        res.status(400).json({message: "error finding "})
    })
})

// router.get('/',(req,res)=>{
//     db.select('*').from('accounts')
//     .then(accounts => {
//         res.status(200).json(accounts);
//     })
// })

router.get('/',(req,res)=>{
    db.select('*').from('accounts')
    .then(accounts => {
        res.status(200).json(accounts);
    })
})

router.get('/', (req, res)=>{
    db.select('*').from('accounts')
    .then(accounts =>{
        res.status(200).json(accounts);
    })
    .catch(error =>{
        res.satus(500).json(error);
    })
});

// router.get('/:id', (req, res) =>{
//     db.select('*')
//     .from('accounts')
//     .where('id', '=', req.params.id)
//     .then(accounts =>{
//         console.log('accounts')
//         res.status(200).json(accounts);
//     })
//     .catch(error =>{
//         res.status(500).json(error)
//     })
// });

router.get('/:id',(req,res) => {
    db.select('*')
    .from('accounts')
    .where('id', '=', req.params.id)
    .then(accounts => {
        console.log('accounts')
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/', (req, res)=>{
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
  
    
router.put('/:id', (req, res) => {
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
  

router.delete('/:id', (req, res) => {
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

module.exports = router;