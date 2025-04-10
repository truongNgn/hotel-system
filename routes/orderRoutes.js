const express = require('express');
const router = express.Router();
const { getCustomerAndRoom } = require('../controllers/orderController');

router.get('/', getCustomerAndRoom);

module.exports = router;
