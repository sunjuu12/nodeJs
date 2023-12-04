require('dotenv').config({path : './db/mysql.env'});
const express = require('express');
const app = express(); // 서버의 역할을 해줄 인스턴스
const mysql = require('./db.js');

// rest 형식
app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, () => {
    console.log('Server Start');
});

// 전체 조회 R
app.get('/customers', async(req, res) => {
    let list = await mysql.query('customerList'); // mysql는 db.js의 module.export를 의미 => 쿼리문 기능 불러옴
    res.send(list);
});

// 단건 조회 R
app.get('/customers/:id', async(req, res) => {
    let data = req.params.id;
    let info = await mysql.query('customerInfo', data);
    res.send(info[0]);
})

// 등록 C
app.post('/customers', async(req, res) => {
    let data = req.body.param;
    let result = await mysql.query('customerInsert', data);
    res.send(result);
});

// 수정 U
app.put('/customers/:id', async(req, res) => {
    let datas = [req.body.param, req.params.id]; // 넘겨주는 데이터가 배열이 필요 => sql에서 ?가 2개 이상인 경우 배열에 담아서 보내야함
    let result = await mysql.query('customerUpdate', datas);
    res.send(result);
});

// 삭제 D 객체가 아니어도 됨. 받을 값이 id로 지정되어있기때문
app.delete('/customers/:id', async(req, res) => {
    let data = req.params.id;
    let result = await mysql.query('customerDelete', data);
    res.send(result);
});
