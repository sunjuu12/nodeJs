const server = require('mysql');
const sql = require('./db/sql.js');


const dbPool = server.createPool ({ // 요청이 들어오기 전에 DB랑 연결
    host : process.env.EMP_HOST,
    port : process.env.EMP_PORT,
    user : process.env.EMP_USER,
    password : process.env.EMP_PWD,
    database : process.env.EMP_DB,
    connectionLimit : process.env.EMP_LIMIT
})

// 쿼리는 반드시 비동기방식으로 진행해야함. // alias, value 두 가지만 받아도 됨
const query = async (table, dml, params) => { //return이 시작되기 전에 끝나야하기에 async를 붙여줘야함.
    return new Promise ((resolve, reject) => { // return의 의미는 비동기 결과를 반환
        dbPool.query(sql[table][dml], params, (err, rows) => { // query(실제 쿼리, 넘어가는 데이터, 처리 결과)
            if(err) {
                console.log('reject: ', err);
                reject({ err });
            } else {
                console.log('resolve: ', rows);
                resolve(rows);
            }
        })
        
    })
}

module.exports = {
    query
}