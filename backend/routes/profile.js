const express = require('express');
const router = express.Router();
const controller = require('../controllers/profileController');

// backend/routes/profile.js
router.get('/health', (req, res) => res.send('API working'));
router.post('/', controller.createProfile);
router.get('/', controller.getProfiles);
router.get('/search', controller.searchProfiles);
router.get('/skills/top', controller.topSkills);
router.get('/:id', controller.getProfileById);
module.exports = router;