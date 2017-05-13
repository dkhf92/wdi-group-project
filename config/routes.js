const express         = require('express');
const router          = express.Router();
const tasks           = require('../controllers/tasks');
const authentications = require('../controllers/authentications');

router.route('/tasks')
.get(tasks.index)
.post(tasks.create);

router.route('/tasks/:id')
.get(tasks.show)
.put(tasks.update)
.delete(tasks.delete);

router.route('/register')
.post(authentications.register);
router.route('/login')
.post(authentications.login);


module.exports = router;
