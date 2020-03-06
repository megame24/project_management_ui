const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5005;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.all('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port: ${PORT}`);
});
