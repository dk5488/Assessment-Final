const express = require('express');
const { postBFHL, getBFHL } = require('../controllers/bfhlController');
const router = express.Router();

// POST /bfhl route
router.post('/', postBFHL);

// GET /bfhl route
router.get('/', getBFHL);

module.exports = router;
