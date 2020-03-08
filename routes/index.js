const express = require('express')
const router = express.Router()

// home page route (http://localhost:3333)
router.get('/', function (req, res) {
  res.send('Weather API');
})

module.exports = router;