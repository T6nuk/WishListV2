const express = require('express');
const wishController = require('../controllers/adminController');
const router = express.Router({ mergeParams: true });

router.get('/random', wishController.getRandomPage);

module.exports = router;
