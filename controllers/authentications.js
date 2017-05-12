
// require user model
// require config/config
const jwt = require('jsonwebtoken');



function authenticationsLogin(req, res) {
  User.findOne({ email: req.body.email }), (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!user || !user.validatePassword(req.body.password)) {
      return res.status(401).json({ message: 'Unauthorized'});
    }
    return res.status(200).json({
      message: 'Welcome back',
      user
    });
  }
}


module.exports = {
  login: authenticationsLogin
};
