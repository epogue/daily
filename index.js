const express = require('express');
const path = require('path');

const app = express();

app.get('/api/test', (req, res) => {
  res.json({ message: "Hello" });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`API listening on port ${port}`);