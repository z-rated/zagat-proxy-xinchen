require('newrelic');
const express = require('express');
const path = require('path');

const app = express();
const port = 1000;
app.use(express.static(path.join(__dirname, '../public')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/restaurants/:id/photos', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://3.88.8.197:3000/api/restaurants/${id}/photos`);
})

app.get('/api/restaurants/:id/reviews', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3001/api/restaurants/${id}/reviews`);
})

app.get('/api/restaurants/:id/info', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://3.16.165.5:3002/api/restaurants/${id}/info`);
})

app.get('/api/restaurants/:id/googlereviews', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://ec2-54-183-14-145.us-west-1.compute.amazonaws.com:3003/api/restaurants/${id}/googlereviews`);
})

app.listen(port, console.log('proxy server listening on port', port));
