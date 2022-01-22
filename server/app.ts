import express from 'express';

export const app = express();

app.listen(4000, () => {
  console.log('server listening on port 4000');
});

app.get('/', (req, res) => {
  res.send('hello world my friend hello there my friend');
});
