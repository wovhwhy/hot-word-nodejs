const userDao = require('../dao/userDao');

exports.getWordDetal = async (wordName) => {
    const wordMeaning = await userDao.getWordDetal(wordName);
    return wordMeaning;
};

exports.getUserInfo = async (userId) => {
    const userInfo = await userDao.getUserInfo(userId);
    return userInfo;
};
