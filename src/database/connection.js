var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'root',
        password : '12345',
        database : 'catalagoveiculos'
     }
});
module.exports = knex