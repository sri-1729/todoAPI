const express = require('express');
const router = express.Router();
//getting controllers
const {getTask} = require('./controllers')


router.route('/task').get(getTask);

module.exports = router;
