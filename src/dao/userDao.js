const db = require('../utils/dbConnPool/mariadb');

exports.getWordDetal = async (wordName) => {
    const sql = `
    SELECT 
        word_id AS wordId,
        word_name AS wordName,
        word_meaning AS wordMeaning
    FROM 
        word
    WHERE
        word_name = ?
    `;
    const sqlParams = [wordName];
    return await db.query(sql, sqlParams);
};

exports.getUserInfo = async (userId) => {
    const sql = `
        SELECT
            user_id AS userId,
            user_name AS userName,
            gender,
            age
        FROM
            user_info
        WHERE
            user_id = ?
    `;
    const sqlParams = [userId];
    return await db.query(sql, sqlParams);
};
