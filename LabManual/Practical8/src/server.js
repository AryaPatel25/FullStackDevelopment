// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());        // Allow React frontend to call API
app.use(express.json());

let counter = 0;

// GET current counter value
app.get('/counter', (req, res) => {
  res.json({ count: counter });
});

// POST to update counter
app.post('/counter', (req, res) => {
  const { count } = req.body;

  if (typeof count !== 'number' || count < 0) {
    return res.status(400).json({ error: 'Invalid count' });
  }

  counter = count;
  res.json({ count });
});

app.listen(port, () => {
  console.log(`✅ API running at http://localhost:${port}`);
});
