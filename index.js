const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
});

app.get('/xhr', (req, res) => {
  res.redirect('https://accounts.google.com/o/oauth2/v2/auth');
});

app.get('/fetch', (req, res) => {
  res.redirect('https://accounts.google.com/o/oauth2/v2/auth');
});

app.listen(3000, () => {
  console.log('Started app on port 3000');
});