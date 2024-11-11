const connection  = require("../db")

const findUserById = (userId) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE id = ?`
        connection.query(query, [userId], (err, result) => {
            if (err) {
                return reject(new Error("Error to find user"))
            }
            if (result.length === 0) {
                return reject(new Error("User not found"))
            }
            resolve(result[0]); // Retorna apenas o usuário encontrado
        })
    })
}

module.exports = findUserById