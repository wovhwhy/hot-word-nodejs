const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');
const authService = require('../service/authService');

router.post('/getWordDetal', async (req, res, next) => {
    const result = await userService.getWordDetal(req.body.wordName);
    res.ResultVO(0, '成功', result);
});

router.post('/getWord', async (req, res, next) => {
    const result = await userService.getWord();
    res.ResultVO(0, '成功', result);
});
router.post('/getWord2', async (req, res, next) => {
    const result = await userService.getWord2();
    res.ResultVO(0, '成功', result);
});
//得用户密码
router.post('/getUserPassword', async (req, res, next) => {
    const result = await userService.getUserPassword(req.body.userId);
    res.ResultVO(0, '成功', result);
});
//用户注册
router.post('/addUser', async (req, res, next) => {
    const result = await userService.addUser(req.body.userId, req.body.password);
    res.ResultVO(0, '成功', result);
});
//获取tocken
router.post('/login', async (req, res, next) => {
    const result = await authService.login(req.body.userId, req.body.password);
    res.ResultVO(0, '成功', result);
});
