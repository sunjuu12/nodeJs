const fs = require('fs');

// Console 은 클래스임. 별도의 파일을 만들기 위함.
const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout : output, stderr: errorOutput });
// 템플릿 기반(특정 포맷을 기반으로 계속 출력)
const count = 5;
logger.log('count : %d', count);
logger.error('count : ' + count);
// logger는 별도의 파일을 만들어 서버가 비정상적으로 종료되어도 원인을 파악할 수 있도록 함.