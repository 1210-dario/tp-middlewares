var express = require('express');
var router = express.Router();

const { index, login, register, admin } = require('../controllers/mainController');
const adminMiddleware = require('../middlewares/adminLogMiddleware');

router.get('/', index);
router.get('/login', login);
router.get('/register', register);

router.get('/admin', adminMiddleware, admin);

module.exports = router