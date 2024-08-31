const express = require('express');
const { getInfo } = require('../controllers/infroController');

const router = express.Router();

router.route('/get-info').get(getInfo);

module.exports = router;
