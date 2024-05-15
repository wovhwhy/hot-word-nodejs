const db = require('../utils/dbConnPool/mariadb');

exports.getWordDetal = async (wordName) => {
    const sql = `
    SELECT 
        word_id AS wordId,
        word_name AS wordName,
        word_meaning AS wordMeaning,
        img
    FROM 
        word
    WHERE
        word_name = ?
    `;
    const sqlParams = [wordName];
    return await db.query(sql, sqlParams);
};

exports.getWord = async () => {
    const sql = `
        SELECT
            word_id AS wordId,
            word_name AS wordName,
            word_meaning AS wordMeaning,
            img,
            date
        FROM
            word
    `;
    return await db.query(sql);
};
exports.getWord2 = async () => {
    const sql = `
        SELECT
            word_id AS wordId,
            word_name AS wordName,
            word_meaning AS wordMeaning,
            img
        FROM
            word2
    `;
    return await db.query(sql);
};
exports.addUser = async (userId, password) => {
    const sql = `
        INSERT INTO
            user_basic_table (user_id, password) 
        VALUES
            (?, ?)
    `;
    const sqlParams = [userId, password];
    return await db.query(sql, sqlParams);
};

exports.getUserPassword = async (userId) => {
    const sql = `
        SELECT
            password
        FROM
            user_basic_table
        WHERE
            user_id = ?
    `;
    const sqlParams = [userId];
    return await db.query(sql, sqlParams);
};
