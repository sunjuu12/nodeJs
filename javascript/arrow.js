// 함수 선언식 (외부 라이브러리 형태, var 형식, 선언되는 위치 상관없이 자유롭게 사용 가능, 덮어쓰기 가능)
function hello(name){
    return "Helllo, " + name;
}

// 화살표 함수 (함수 표현식 형태) 매개변수는 (), 실제 사용하는 코드는 {}
// const arrHello = (name) => {return "Hello, " + name;}

let arrHello = (name) => {return "Hello, " + name;}
// 매개번수와 사용되는 코드가 하나일 땐 괄호를 뺌
arrHello = name => "Hello, " + name; 

// 함수 표현식 (해당 함수가 사용되기 전에 선언되어야 함. 위쪽에 배치되어야 함. 덮어쓰기 불가능)
const message = function (msg){
    return "msg : " + msg;
}

/*f
unction hello(msg){
    return "msg, Hello : " + msg;
}

console.log(hello("word"));
*/

let arrMessage = (msg) => {return "msg: " + msg;}
arrMessage = msg => "msg : " + msg;
// 매개변수가 없거나 두 개 이상일 경우 괄호 무조건 있어야 함
arrMessage = () => {
                     let today = new Date().getDay();
                     console.log("오늘 날짜", today);
                    }