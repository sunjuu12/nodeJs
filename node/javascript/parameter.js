function printMsg( msg = '메시지를 입력해주세요', to = '') {
    console.log(msg, to);
}

printMsg('Have A Nice Day');
printMsg();

function sum (x, y, ...args) {
    let result = x + y;
    console.log(args.length)
    for (let num of args) {
        result += num;
    }
    return result;
}
// 하나의 형태에 배열로 담김
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
