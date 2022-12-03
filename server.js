const express = require('express')
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const {client} = require('./models/db');
const {graphqlHTTP} = require('express-graphql');
const Schema = require('./graphql/schema');

dotenv.config();
app.use(express.json());
app.use(cors());

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