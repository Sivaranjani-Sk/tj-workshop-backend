const express = require('express');
const qbController = require('../controller/qbController');

const router = express.Router();

router.get('/all', qbController.getAll);
router.get('/subject', qbController.getSubjectData);
router.post('/submit', qbController.submit);
router.post('/create', qbController.postQBData);

module.exports = router;
