const express = require('express');
//getting the connection from database server
//const pool = require('./db/connect.js');

//creating app and port
const app = new express();
const port = 3000;

//getting route
const router = require('./routes')

//middleware for req.body property creation
app.use(express.json());
app.use('/api/todo/', router);

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})
