const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.controller');
const requireAuth = require('../middlewares/auth.controller');
const upload = require('../middlewares/upload');


router.get('/', adminController.admin);

router.get('/login', adminController.login);

router.get('/register', adminController.register);

router.post('/login', adminController.postLogin);

router.post('/register', adminController.postRegister);

router.get('/logout', adminController.logout);



module.exports = router;