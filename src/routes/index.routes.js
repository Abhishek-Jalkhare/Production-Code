const { Router } = require('express');
const router = Router();
const controller = require('../controller/index.controller');

router.get('/', controller.indexController);
router.get('/home', controller.home);


module.exports = router;    