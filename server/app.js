const express = require('express');
// const path = require('path');

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(express.static(path.resolve(__dirname, '..', 'build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

app.get('/', (req, res) => { 
  res.send('Hello World!') 
})

app.post('/login', (req, res) => { 
  res.json({
    status: 200,
    token: '12345',
    message: 'Login success'
  })
})

module.exports = app;