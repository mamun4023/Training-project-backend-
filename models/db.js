const {Client, Pool} = require('pg');


const client = new Client({
    host : 'localhost',
    user : 'user1',
    port : 5432,
    password : '123456',
    database : 'students'
})


module.exports = {client}