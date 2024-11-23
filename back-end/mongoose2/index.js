import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
})

const port = 3010;

app.listen(port, () => {
  console.log(`Express listning at http://localhost:${port}`);
})
