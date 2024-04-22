const userDao = require('../dao/userDao');

exports.getWordDetal = async (wordName) => {
    const wordMeaning = await userDao.getWordDetal(wordName);
    return wordMeaning;
};

exports.getWord = async () => {
    const word = await userDao.getWord();
    return word;
};
