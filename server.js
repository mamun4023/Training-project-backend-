const express = require('express')
const app = express();
const {client} = require('./models/db')


client.connect()
  .then(()=>{
    console.log("DB connected")
  })







app.listen(4000, ()=>{
    console.log("Server is running...")
})