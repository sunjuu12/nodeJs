let names = ["Hong", "Kang", "Adward", "Lee"];
names.sort();
console.log(names);
names.reverse();
console.log(names);

let nums = [40, 100, 1, 5, 25, 10];
nums.sort();
console.log(nums);
// return 값이 양수일 경우 a(첫번째 매개변수)가 크다고 인식 (오름차순)
nums.sort((a, b) => {
    return a-b;
})
console.log(nums);