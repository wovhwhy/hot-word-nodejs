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
