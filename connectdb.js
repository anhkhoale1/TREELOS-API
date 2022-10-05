const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.TREELOS_ID,
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
