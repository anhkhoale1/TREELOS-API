const app = require('express')();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('test request')
})

// Login request
app.post('/login/player', (req, res) => {
  let login = req.body.login;
  let password = req.body.password;
  
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})