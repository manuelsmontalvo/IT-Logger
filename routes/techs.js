const { Router } = require('express');
const controllers = require('../controllers/techs');

const router = Router();

router.get('/techs', controllers.getTechs);
router.post('/techs', controllers.createTech);
router.delete('/techs/:id', controllers.deleteTech);

module.exports = router;
