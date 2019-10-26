const { validationResult } = require('express-validator')

module.exports = (req, res) => {
  const hasErrors = validationResult(req);
  if (!hasErrors.isEmpty()) return res.status(401).send({ hasErrors })

  return res.status(200).send('welcome yokuso!')
}