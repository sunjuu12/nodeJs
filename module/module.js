const { add, minus } = require('./calculator');
// require은 내부에 가지고 있는 함수를 사용하기 위해 가장 위에 선언
// 경로를 설정하는 부분을 사용하지 않으면 설치한 모듈 중 하나를 불러오는 것 있으면 내장함수를 불러오는 것
// require은 무조건 객체가 반환. 사용하고자하는 대상만 {} 안에 따로 가지고 올 수 있음

console.log(add(10, 25));
console.log(minus(25, 3));