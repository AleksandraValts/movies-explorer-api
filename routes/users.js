const router = require('express').Router();
const { getUserInfo, changeUserInfo } = require('../controllers/users');
const { validationChangeUserInfo } = require('../middlewares/validate');

router.get('/me', getUserInfo);
router.patch('/me', validationChangeUserInfo, changeUserInfo);
module.exports = router;
