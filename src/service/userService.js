const userDao = require('../dao/userDao');
const bcrypt = require('bcrypt');

exports.getWordDetal = async (wordName) => {
    const wordMeaning = await userDao.getWordDetal(wordName);
    return wordMeaning;
};

exports.getWord = async () => {
    const word = await userDao.getWord();
    return word;
};
exports.addUser = async (userId, password) => {
    const passwordEnd = bcrypt.hashSync(password, 10);
    const user = await userDao.addUser(userId, passwordEnd);
    return user;
};

exports.getUserPassword = async (userId) => {
    const password = await userDao.getUserPassword(userId);
    return password;
};
