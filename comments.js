// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the middleware
app.use(express.json());

// Create the route
app.post('/comments', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Comment created!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});