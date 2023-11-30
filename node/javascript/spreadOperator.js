// 펼침 연산자
let array = [1, 2, 3];
let string = "Hello";

// [1, 2, 3, "H", "e", "l", "l", "o"]
// 방법 1
let newArray = [array, ...string];

// 방법 2
/*
let newArray = [];
for(let value of array) {
    newArray.push(value);
}

for(let value of string) {
    newArray.push(value);
}
*/
console.log(newArray);