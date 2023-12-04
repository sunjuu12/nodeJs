const fs = require('fs');

const data = 'Hello, World!!';
fs.writeFileSync('./sample.txt', data, 'utf8');

// 동기화하지 않고 처리하는 방식 (비동기)
// fs.writeFile('./sample.text', data, 'utf8', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('파일 쓰기 완료!');
// })

// 비동기(순서 x)
fs.readFile('./sample.txt', 'utf8', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
});