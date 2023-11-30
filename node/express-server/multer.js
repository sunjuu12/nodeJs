const multer = require('multer');
const express = require('express');

const path = require('path');
const app = express();

const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, 'uploads/'); // 어떤 폴더를 기준으로 처리할 건지 지정
    },
    filename : function (req, file, cb) {
        cb(null, new Date().valueOf() + path.basename(file.originalname)); // 사용자가 입력한 파일명은 중복될 수 있음 => 유니크할 수 있도록 random 값
    }
}); // 저장소 설정

const upload = multer({storage : storage});

//multer는 라우팅 별로 추가
app.post('/profile', upload.single('avatar'), (req, res) => { // 'avatar'는 input의 name
    console.log(req.file);
    console.log(req.body);
}); // single 은 받을 이름만 지정

app.post('/photos', upload.array('photos', 12), (req, res) => {
    for(let file of req.files) {
        console.log(file);
    }
}) // 다중파일은 받을 크기도 지정

app.listen(5000, () => {
    console.log('Server Start!!');
})