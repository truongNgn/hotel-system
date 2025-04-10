const express = require('express');
const router = express.Router();
const { getAllRooms } = require('../controllers/room.controller');

router.get('/', getAllRooms);

module.exports = router;
