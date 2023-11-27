const { setInterval } = require("timers");

const timeout = setTimeout(() => {
    let today = new Date;
    let year = today.getFullYear();
    let month = ('0' + today.getMonth() + 1).slice(-2);
    let day = ('0' + today.getDay()).slice(-2)
    console.log(`${year}년${month}월${day}일`)
}, 1000);

let count = 0;
const interval = setInterval(() => {
    console.log('interval %d', count++);
    if(count == 5) {
        clearInterval(interval);
    }
}, 1000)

//setImmedate 즉시 실행 아닌 것 확인. 코드가 있을 땐 코드부터 실행 callback 함수 중에선 우선 순위가 높다(하지만 그것도 보장 못 함)
const immedate = setImmediate(()=>{
    console.log('즉시 실행 요청');
})

console.log('마지막 코드');