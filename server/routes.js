const router = require('express').Router();
const authController = require('./controllers/auth');
const userController = require('./controllers/user');

router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!',
  });
});

router.route('/login').post(authController.login);

router.route('/users').post(userController.create_user);

module.exports = router;