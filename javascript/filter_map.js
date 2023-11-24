// filter
let words = ['spray', 'limit', 'elite', 'exuberant', 'paresent'];
let result = words.filter(function(word, idx, arry) {
    // console.log(word, idx, arry);
    // console.log(a, b, c, d);
    return word.length > 6;
});
console.log(words, result);

// map => 배열 길이 유지, 내부 구성 값 변경됨
let users= [
    {
        id : 100,
        name : 'Hong'
    },
    {
        id : 200,
        name : 'Kang'
    },
    {
        id : 300,
        name : 'Lee'
    }
]
// 객체 복사할 때 주의해야함 (객체는 참조형 데이터, 객체는 복사 개념 X 데이터 동일하게 넣어야 함, 수정시 같이 수정 됨(원본 데이터 변경))
result = users.map(function(user) {
    return {
        id : user.id,
        name : user.name,
        grade : user.id == 200 ? 'VIP' : '일반'
    }
})

console.log(users, result);
