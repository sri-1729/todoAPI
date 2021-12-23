const express = require('express');
const router = express.Router();
//getting controllers
const {getTask,
      putTask,
      allTask,
      updateTask,
      deleteTask
} = require('./controllers')


router.route('/task')
  .get(getTask)
  .post(putTask)
  .put(updateTask)
  .delete(deleteTask);

router.route('/tasks').get(allTask);

module.exports = router;
