const mysql = require('mysql')
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.TREELOS_HOST,
  user: process.env.TREELOS_USER,
  password: process.env.TREELOS_PASSWORD,
  database: process.env.TREELOS_DB
})

connection.connect((err) => {
  if(err) {
      throw err;
  }
  console.log('MySQL connected....')
});

module.exports = connection
