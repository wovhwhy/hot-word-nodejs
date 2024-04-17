const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

router.post('/getWordDetal', async (req, res, next) => {
    const result = await userService.getWordDetal(req.body.wordName);
    res.ResultVO(0, '成功', result);
});

router.post('/getUserInfo', async (req, res, next) => {
    const result = await userService.getUserInfo(req.body.userId);
    res.ResultVO(0, '成功', result);
});
