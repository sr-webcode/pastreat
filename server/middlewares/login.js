const { check } = require('express-validator');

module.exports = {
  admin: [
    check('username')
      .not().isEmpty().withMessage('username field cannot empty!')
      .custom((val) => {
        return val === process.env.SECRET_USER;
      }).withMessage('admin username does not exists!'),
    check('password')
      .not().isEmpty().withMessage('password field cannot empty!')
      .custom((val) => {
        return val === process.env.SECRET_PASS;
      }).withMessage('admin password is incorrect!'),
  ],
  regularUser: [],
  newUser: []
}
