const express = require('express');
const path = require('path');
const cors = require('cors');

const port = 3000;

const apiRouter = require('./routes/api');

//Stating the server
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.resolve(__dirname, '../client')));

// Statically serve everything in the build folder on the route
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/api', apiRouter);

//We need to serve index.html on the route /
app.get('/', (req, res) => {
  //Two dots to get up one directory, to get to client (In server folder, move up one dir to scratch-project, move down to client, access index.html)
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}...`);
});
