const { check } = require('express-validator');

module.exports = {
  admin: [
    check('username')
      .not().isEmpty().withMessage('username field cannot empty!'),
    check('password')
      .not().isEmpty().withMessage('password field cannot empty!')
  ],
  regularUser: [],
  newUser: []
}


