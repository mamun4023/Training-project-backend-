const express = require('express')
const app = express();
const {client} = require('./models/db')
const {graphqlHTTP} = require('express-graphql');
const Schema = require('./graphql/schema');

client.connect()
  .then(()=>{
    console.log("DB connected")
  })



app.use('/', graphqlHTTP({
  schema : Schema,
  graphiql : true,
}))



app.listen(4000, ()=>{
    console.log("Server is running...")
})