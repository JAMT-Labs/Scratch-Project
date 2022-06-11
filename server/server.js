// const express = require('express');
// const path = require('path');

// new
import express from 'express';
import apiRouter from './routes/api.js';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//end new

const port = 3000;

//Stating the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));
// app.use(express.static(path.resolve(__dirname, '../client')));

// Statically serve everything in the build folder on the route
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('api', apiRouter);

//new testing route
app.get('/hello', (_req, res) => {
  res.send('hello team Pink Fairy Armadillo!');
});
//new testing end

//We need to serve index.html on the route /
app.get('/', (req, res) => {
  //Two dots to get up one directory, to get to client (In server folder, move up one dir to scratch-project, move down to client, access index.html)
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
  console.log(`listening on port: ${port}...`);
});

// new app.listen(_config.port, () => {
//   console.log(`Listening on port ${_config.port}`);
// });
