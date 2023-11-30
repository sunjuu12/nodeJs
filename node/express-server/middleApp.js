const express = require('express'); // 서버 생성
const session = require('express-session'); // express-session
const cors = require('cors'); // cors
const app = express();

// application/www-form-urlencoded 기본적으로 사용하는 content 타입, 굳이 사용은 안 함
const defaultParser = express.urlencoded({extended : false});

// application/json content 타입 json
const jsonParser = express.json(); // 내장된 미들웨어 모델 호출하여 사용

app.use(defaultParser); // 경로 상관없이 모든 라우팅에 대해서 동일하게 적용

// 따로 등록하지 않아도 parse
app.post('/info', (req, res) => {
    res.send('welcome, ' + req.body.name);
});

// 라우터별 등록 // 경로, 미들웨어, 콜백함수 순서대로 실행
app.post('/message', jsonParser, (req, res) => {
    res.send('MSG : ' + req.body.message);
});

app.listen(5000, () => {
    console.log('server start!');
})

// express-session
let sessionSetting = session({
    secret : 'secret key', // 암호화 키
    resave : false, // 변경사항이 없을 때도 저장할 것인지?
    saveUninitialized : true, // 세션저장 전 임시저장 할 것인지
    cookie : {
        httpOnly : true, // 자바스크립트에서 document.cookie로 정보 볼 수 없음
        secure : false, // https 환경에서만 쿠키 정보 주고 받도록 설정
        maxAge : 6000 // 쿠키가 유지되는 시간
    }
});

app.use(sessionSetting);

// cors
const corsOptions = {
    origin : 'http://192.168.0.50:5500', // 접속할 origin. 같은 pc여도 포트가 다를 때 cors 풀어주지 않으면 접근 안 됨
    optionsSuccessStatus : 200 // 레거시 브라우저에 지원을 해줄 때만 작성.
}

app.use(cors(corsOptions)); // 객체 값을 넘겨준 다음 저장 cors 모든 라우터에 적용
// cors

app.get('/', (req, res) => {
    res.send(req.session); // session 정보 불러오기
    // res.send(req.session.user);
});
 
// 정보를 넣고자 할 때
app.post('/login', (req, res) => {
    const { id, pwd } = req.body;
    req.session.user = id; // user 자리에 고유값을 설정하면 안 됨
    req.session.pwd = pwd;
    req.session.save(function(err) { // save로 저장 시도.
        if(err) throw err;
        res.redirect('/'); // 메인으로 넘어가도록 시도
    })
})

app.get('/logout', (req, res) => {
    req.session.destroy(); // destroy 객체 삭제&파괴
    req.redirect('/');
})
