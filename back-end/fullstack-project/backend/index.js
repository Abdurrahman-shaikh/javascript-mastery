import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A Joke',
      content: 'this is a joke'
    },
    {
      id: 2,
      title: 'Another Joke',
      content: 'this is another joke joke'
    },
    {
      id: 3,
      title: 'Third Joke',
      content: 'this is the third joke'
    },
    {
      id: 4,
      title: 'Fourth Joke',
      content: 'this is the fourth joke'
    },
  ]

  res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
