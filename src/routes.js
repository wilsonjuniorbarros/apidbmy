 const express = require('express');
 const router = express.Router();

 const userController = require('./controllers/userController');

 router.get('/tbl_user', userController.getUserAll);

 module.exports = router;