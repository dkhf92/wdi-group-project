const express         = require('express');
const router          = express.Router();
const tasks           = require('../controllers/tasks');
const authentications = require('../controllers/authentications');
const users           = require('../controllers/users');

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

router.route('/users')
.get(users.index);

router.route('/users/:id')
.get(users.show)
.put(users.update)
.delete(users.delete);


module.exports = router;
