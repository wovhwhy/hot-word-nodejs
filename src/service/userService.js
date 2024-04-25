const userDao = require('../dao/userDao');

exports.getWordDetal = async (wordName) => {
    const wordMeaning = await userDao.getWordDetal(wordName);
    return wordMeaning;
};

exports.getWord = async () => {
    const word = await userDao.getWord();
    return word;
};
exports.addUser = async (userId, password) => {
    const user = await userDao.addUser(userId, password);
    return user;
};

exports.getUserPassword = async (userId) => {
    const password = await userDao.getUserPassword(userId);
    return password;
};
