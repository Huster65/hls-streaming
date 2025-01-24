const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware để phục vụ file statically
app.use(express.static(path.join(__dirname)));

// Route để phục vụ file m3u8
app.get('/playlist', (req, res) => {
  res.sendFile(path.join(__dirname, 'output.m3u8'));
});

// Route để phục vụ các segment video
app.get('/segment/:segment', (req, res) => {
  const segment = req.params.segment;
  res.sendFile(path.join(__dirname, segment));
});

// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
