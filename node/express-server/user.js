const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('회원 정보 조회');
});

router.post('/insert', (req, res) => {
    res.send('회원 정보 등록');
});

router.put('/update', (req, res) => {
    res.send('회원 정보 수정')
})

router.delete('/delete', (req, res) => {
    res.send('회원 정보 삭제');
})

// router 자체가 객체라 exports에 집어넣을 수 있다.
// return 구문이 있어야하는 경우 먼저 적어주는 것이 까먹지 않고 좋음. 반환코드 먼저 작성하기
module.exports = router;