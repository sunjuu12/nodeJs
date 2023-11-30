const defaultNum = 1;

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// module형태를 객체 형태로 내보냄 (내부에 보내고자하는 대상/ 아닌 경우 구별)
module.exports = {
    defaultNum,
    add,
    minus,
    multi,
    divide
}

/* export default {} */