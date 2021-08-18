const express = require('express');
const app = express();

// GET /home
app.get('home', (req, res) => {
  req.write('Welcome to home page');
  res.send();
});

// app.get('/')

app.listen(2000);