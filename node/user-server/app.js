require('dotenv').config({path : './db/user.env'});
const express = require('express');
const app = express(); // 서버의 역할을 해줄 인스턴스
const user = require('./db.js');

// rest 형식
app.use(express.json({
    limit : `50mb`
}));

app.use(express.static('dist')); // 정적 파일 추가

app.listen(3300, () => {
    console.log('Server Start!');
});

app.get('/', (req, res) => { // 절대 경로 추가
    res.sendFile('/dist/index.html');
})

// 전체 조회
app.get('/api/users', async(req, res) => {
    let list = await user.query('userList');
    res.send(list);
});

// 단건 조회
app.get('/api/users/:id', async(req, res) => {
    let data = req.params.id;
    let info = await user.query('userInfo', data);
    res.send(info[0]);
});

// 등록
app.post('/api/users', async(req, res) => {
    let data = req.body.param;
    let result = await user.query('userInsert', data);
    res.send(result);
});

// 수정
app.put('/api/users/:id', async(req, res) => {
    let datas = [req.body.param, req.params.id];
    let modify = await user.query('userUpdate', datas);
    res.send(modify);
});

// 삭제
app.delete('/api/users/:id', async(req, res) => {
    let data = req.params.id;
    let del = await user.query('userDelete', data);
    res.send(del);
});