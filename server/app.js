const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => { 
  res.send({ success: true }) 
})

app.post('/login', (req, res) => { 
  console.log({ body: req.body })
  res.json({
    status: 200,
    token: '12345',
    message: 'Login success'
  })
})

module.exports = app;

// app.use(express.static(path.resolve(__dirname, '..', 'build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });