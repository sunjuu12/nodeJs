const path = require('path');

console.log('== 절대경로');
console.log(__filename);
console.log(__dirname);
console.log(path.dirname(__filename));
// basename : 경로의 마지막 부분 반환
console.log('실제 파일명 : %s', path.basename(__filename));
// extname : 파일의 확장자 
console.log('확장자 : ', path.extname(__filename));

// 하나의 문자로 표현되기에 개별확인하기 위해서는 split(변수)기반으로 잘라내야함
// 하나의 경로
let pathList = process.env.PATH.split(path.delimiter);
console.log(path.delimiter, pathList);
console.log('');
// 실제 경로는 sep가 가지고 있음
console.log(path.sep, pathList[0].split(path.sep));