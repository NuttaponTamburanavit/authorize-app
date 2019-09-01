const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Routes = require("./routes");

const connectMongoDB = () => {
  const mongoDB = 'mongodb://127.0.0.1/fancy-app';
  mongoose.connect(mongoDB, { useNewUrlParser: true });

  const db = mongoose.connection;

  if(!db) {
    console.log("Error connecting db")
  } else {
    console.log("Db connected successfully")
  }

  db.on('error', 
    console.error.bind(console, 'MongoDB connection error:')
  );
}

connectMongoDB();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => { 
  res.send('Hello World with Express');
})

app.use('/api', Routes);

// app.post('/login', (req, res) => { 
//   const users = User.find({});

//   console.log({ 
//     body: req.body, 
//     users 
//   });

//   res.json({
//     status: 200,
//     token: '12345',
//     message: 'Login success'
//   })
// })

module.exports = app;

// const path = require('path');
// app.use(express.static(path.resolve(__dirname, '..', 'build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });