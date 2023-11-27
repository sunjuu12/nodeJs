const express = require('express');
const app = express();

const getData = async() => {
    return await fetch('db.json')
    .then(res = res.json());
}

let db = getData();

// 라우팅 등록 // 첫번째 매개변수는 경로 // 서버로 보내는 요청 메소드
app.get('/', (req, res) => {
    res.send('Server Connect');
});

app.get('./posts', (req, res) => {
    res.send(db['posts']);
})

// 서버 동작 // 포트번호 지정 // 위치는 상관없음
app.listen(3000, () => {
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});