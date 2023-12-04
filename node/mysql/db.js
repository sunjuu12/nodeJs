const mysql = require('mysql');
const sql = require('./db/sql.js'); // sql은 객체임
require('dotenv').config({path : './db/mysql.env'});

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST, // localhost 넣어도 됨
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT // 최대 몇 개를 받을 것인지를 정함 
});

// promise 이용해 비동기로 진행 alias(어떤 sql문을 요구하는지)는 필드 지정(sql.js -> db.js 로 전달)
/* 쿼리문 형태
pool.query('sql문', '값', 콜백 함수(err, result(쿼리문 실행 결과) => {}))
sql, alias, ...  / sql[alias] 왜 두번째 형식으로 사용하는가?
=> alias라는 변수를 이용하여 값을 객체(sql)에 전달, 변수를 이용해 동적으로 보내기 위해
*/
const query = async (alias, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql[alias], values, (err, results) => {
            if (err) {
                console.log(err);
                reject({ err });
            } else { 
                resolve(results); 
            }
        })
    });
}

// db와 접근 확인
/*
const getData = async() => {
    console.log(await query('customerList'));
};

getData();
*/

module.exports = {
    query
}