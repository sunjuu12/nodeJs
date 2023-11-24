let obj = {
    id : 100,
    name : 'Hong',
    birth : '1999-12-25'
}

let { id, name, age } = obj;
console.log(id, name, age);

// 모듈에서 특정 대상을 불러오기위한 방법
module.export = {
    object : {},
    method : function(){}
}
let { method } = module;

let array = ['Hello', 'Nice', 'Monday'];
// [] 안은 어떤 값에 담을 건지 표시(x에는 'Hello', y에는 'Nice'), 담을 순서대로 작성
// 인덱스 순서대로 들어감. Hello 와 Monday 두 가지는 선택해서 출력할 수 없음
let [x, y] = array;
console.log(x, y);