const router = require('express').Router();
const authController = require('./controllers/auth');

router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!',
  });
});

router.route('/login').post(authController.login);
router.route('/register').post(authController.register);

module.exports = router;