const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool({
  user : process.env.user,
  password : process.env.password,
  database : process.env.database
});

module.exports = pool;
