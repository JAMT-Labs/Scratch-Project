const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

// router to get root route of /api which will call API to get all disasters
router.get(
  '/',
  apiController.addDisastersToDB,
  apiController.getDisasters,
  (req, res) => res.status(200).json(res.locals.allDisastersFromDB)
);

module.exports = router;
