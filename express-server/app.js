const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js'); // 파일 경로 지정
const app = express();

app.use('/user', userRouter); // 라우터 등록(라우팅과는 상관없음)
app.use('/public', express.static('images')); // 정적 파일 등록(폴더 이름이 public으로 대체됨)

// 에러처리
app.use(function (err, req, res, next) {
    res.status(500).json({statusCode: res.statusCode,                                               
                          errMessage : err.message});
});

app.get('/error', (req, res, next) => {
    next(new Error('Process Fail! Check Data!')); 
});


// 비동기 x 서버가 동작했을 때 파일 가지고 있어야함
const jsonFile = fs.readFileSync('db.json'); // db 역할을 할 수 있는 코드를 만들어줌
const jsonData = JSON.parse(jsonFile); // 데이터 변환
// db.json post의 특정 값 뽑아오기 위한 코드
const getData = (target, where) => {
    let data = jsonData[target];
    if(Array.isArray(data)) {
        let list = data;
        for(let obj of list) {
            if(obj.id == where) {
                data = obj;
            }
        }
    }
    // id 값을 체크 안 하는데 전체 조회 / 개별 조회 가능한 이유? => where에 값이 없다면 if문(안) 동작 x, 
    // if문(밖) 프로파일 for of는 반복이 가능한 부분만 반복 => 해당 배열이 배열인지 아닌지 확인하기 위해 (typeof는 안 됨)
    return data;
}

// const getData = async() => {
//     return await fetch('db.json')
//     .then(res = res.json());
// }
// 패치 실행 환경이 맞지 않아서 서버 실행 x

// let db = getData();

// 라우팅 등록 // 첫번째 매개변수는 경로 // 서버로 보내는 요청 메소드
app.get('/', (req, res) => {
    res.send('Server Connect');
});

// 조회
app.get('/posts', (req, res) => {
    let data = getData('posts'); // 데이터 변환됨
    res.send(data); // 데이터 보내줌
});

// 조회시 조건이 같이 오는 경우 '/posts/:id' 경로에 붙어오는 값
// req body에 있는 값은 ---  body 외 쿼리 스트링이나 다른 값은 params가 옴
app.get('/posts/:id', (req, res) => {
    let data = getData('posts', req.params.id);
    res.send(data);
});


app.get('/comments', (req, res) => {
    let data = getData('comments');
    res.send(data);
})

app.get('/comments/:id', (req, res) => {
    let data = getData('comments', req.params.id);
    res.send(data);
})

// profile은 객체이기 때문 (배열x) 조건 걸 수 없음
app.get('/profile', (req, res) => {
    let data = getData('profile');
    res.send(data);
})

// 동일한 경로라도 메소드가 다르면 유니크한 코드임, 동일한 경로라도 get, put, post, delete 구분

// 122p // 하나의 경로에 대해서 한 곳에서 작성할 수 있도록하는 것 route 권장x -> 직관적으로 경로가 어떤 식으로 들어올지 모르기때문
app.route('/emps')
.get((req, res) => {
    res.send('사원 전체조회')
})
.post((req, res) => {
    res.send('사원 등록')
})
.put((req, res) => {
    res.send('사원 수정')
})
.delete((req, res) => {
    res.send('사원 삭제')
})

// app.get('./posts', (req, res) => {
//     res.send(db['posts']);
// })

// 서버 동작 // 포트번호 지정 // 위치는 상관없음
app.listen(3000, () => {
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});