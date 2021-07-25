const { Router } = require('express');
const controllers = require('../controllers/logs');

const router = Router();

router.get('/logs', controllers.getLogs);
router.post('/logs', controllers.createLog);
router.put('/logs/:id', controllers.updateLog);
router.delete('/logs/:id', controllers.deleteLog);

module.exports = router;
