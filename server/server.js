const express = require('express');
const path = require('path');

const port = 3000;

const apiRouter = require('./routes/api')

//Stating the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.resolve(__dirname, '../client')));

// Statically serve everything in the build folder on the route
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/api', apiRouter)

//We need to serve index.html on the route /
app.get('/', (req, res) => {
  //Two dots to get up one directory, to get to client (In server folder, move up one dir to scratch-project, move down to client, access index.html)
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
  console.log(`listening on port: ${port}...`);
});