// const db = require('../models/scratchModel');
// const phq = require('predicthq');
// const { locals } = require('../server');
// const axios = require('axios');

// // Error handling
// const createErr = (errInfo) => {
//   const { method, type, err } = errInfo;
//   return {
//     log: `disasterController.${method} ${type}: ERROR: ${
//       typeof err === 'object' ? JSON.stringify(err) : err
//     }`,
//     message: {
//       err: `Error occurred in disasterController.${method}. Check server logs for more details.`,
//     },
//   };
// };

// const disasterController = {};

// apiController.getDisasterInfo = (req, res, next) => {
//   console.log('hello from apiController.getDisasterInfo');
//   const query = `SELECT * FROM disasters WHERE event_id='${req.params.id}'`;
//   console.log(
//     req.params.id,
//     'this is the req.params.id, is it not event ID? make sure!'
//   );
//   db.query(query)
//     .then((data) => {
//       res.locals.disasterInfo = data.rows;
//       console.log(res.locals.disasterInfo, 'this is res.locals.disasterInfo!');
//       next();
//     })
//     .catch((err) =>
//       next({
//         log: 'apiController.getDisasters: Error: Unable to get disasters.',
//         message: { err: err.message },
//       })
//     );
// };

// module.exports = disasterController;
