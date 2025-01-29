// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.status(201).send('Comment created!');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.status(200).send('Get all comments!');
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  res.status(200).send(`Get comment with id: ${req.params.id}`);
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
  res.status(200).send(`Update comment with id: ${req.params.id}`);
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
  res.status(204).send(`Delete comment with id: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});