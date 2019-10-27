const { validationResult } = require('express-validator')

module.exports = ((req, res) => {
  //validation errors first
  const hasErrors = validationResult(req);
  if (!hasErrors.isEmpty()) return res.status(422).json({ hasErrors })
  return res.status(200).send('ook gooodjob!')
})