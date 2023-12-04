// 예전 코드임 whatwg로 바꿀 수 있음
const url = require('url');
let legercy = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(legercy); // 객체 형태로 반환

// 이 방식 기억하기
let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(whatwg);
// console.log(whatwg.searchParams);
// searchParams 내부의 값을 클래스 형태로 가지고 있음. get 기반으로 특정 값을 불러오는 것도 가능함.
console.log(whatwg.searchParams.get('query'));