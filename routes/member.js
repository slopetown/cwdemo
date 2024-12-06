const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

router.get('/api/members', memberController.searchMembers);
router.post('/api/members', memberController.registerMember);
router.put('/api/members/:id', memberController.updateMember);
router.delete('/api/members/:id', memberController.deleteMember);

module.exports = router;
