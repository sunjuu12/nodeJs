const users = require('mysql'); // 'mysql' 는 모듈임
const sql = require('./db/sql.js'); // sql은 객체임
require('dotenv').config({path : './db/user.env'});

const pool = users.createPool({
    host : process.env.USER_HOST,
    port : process.env.USER_PORT,
    user : process.env.USER_USER,
    password : process.env.USER_PWD,
    database : process.env.USER_DB,
    connectionLimit : process.env.USER_LIMIT
});

const query = async(alias, values) => {
    return new Promise ((resolve, reject) => {
        pool.query(sql[alias], values, (err, results) => {
            if(err) {
                console.log(err);
                reject({ err });
            } else {
                resolve(results);
            }
        })
    })
}

// db 연결 확인
// const getData = async () => {
//     console.log(await query('userList'))
// }

// getData();

module.exports = {
    query
}