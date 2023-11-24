class Human {
    /*
    자바식
    let ssn;
    let name;
    let age;
    */
    // 필드, 생성자, 메소드
    // _의미는 숨겨진 의미 접근 제한자
    constructor() {
        this._ssn;
        this._name = 'Hong';
        this._age;
    }
    // get만 있으면 readonly
    set ssn(ssn) {
        this._ssn = ssn;
    }
    get ssn() {
        return this._ssn
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        this._age = age;
    }
    get age() {
        return this._age;
    }
    getInfo() {
        console.log(this._ssn, this._name, this._age);
    }
}

let hu = new Human();
hu.ssn = '990520';
hu.name = 'Kang';
hu.age = 25;
hu.getInfo();