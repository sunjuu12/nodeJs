// process 는 전역 변수라 import, require, 안 써도 상관없음.
const process = require('process');

// process.env는 객체임
console.log(process.env.JAVA_HOME);


// OS => 값을 함수로 호출
const os = require('os');
console.log(os.cpus()); // CPU 코어 정보
console.log(os.tmpdir()); // 임시 저장 경로