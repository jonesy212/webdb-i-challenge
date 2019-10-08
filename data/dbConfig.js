const knex = require('knex');

const configOptions = require('../knexfile').development;

module.exports = knex(configOptions);


function find(query){
    const{page =  1, limit = 2, sortby = 'id', sortdir= 'asc'} = query
    const offset = limit* (page -1);
  
    let rows = db('posts')
      .orderBy(sortby, sortdir)
      .limit(limit)
      .offset(offset)
  
      return rows
  }