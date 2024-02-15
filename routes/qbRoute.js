const express = require('express');
const qbController = require('../controller/qbController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/all', authenticateToken, qbController.getAll);
router.get(
  '/subject',
  authenticateToken,
  qbController.getSubjectData
);
router.post('/submit', authenticateToken, qbController.submit);
router.post('/create', authenticateToken, qbController.postQBData);

module.exports = router;
