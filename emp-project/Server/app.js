require('dotenv').config({ path : './db/emp.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, () => {
    console.log('Server Start, http://localhost:3000')
});

app.get('/depts', async(req, res) => {
    let list = await mysql.query('dept', 'list');
    res.send(list);
})

// 전체 조회 
// 파일을 읽어들이거나 외부와 통신, DB 통신은 비동기
// 내부에 가지고 있는 것은 동기
app.get('/emps', async(req, res) => {
    let list = await mysql.query('emp', 'list');
    res.send(list);
})

// 단건 조회
app.get('/emps/:no', async(req, res) => {
    let empNo = req.params.no;
    let info = (await mysql.query('emp', 'info', empNo))[0]
    res.send(info);
});

const empTable = ['emp_no', 'first_name', 'last_name', 'gender', 'hire_date'];
const deptEmpTable = ['emp_no', 'dept_no', 'from_date', 'to_date']; // set절에 정의된 칼럼 순서대로 작성해야함
const salariesTable = ['emp_no', 'salary', 'from_date', 'to_date'];

// 등록 // req로 넘어온 데이터는 사용되지 않음. 가공 후 사용
app.post('/emps', async(req, res) => {
    /*
    let empData = {
        // 값 수정 어려움, 가지고 있는 값이 공백일 경우 전달 안 됨.
        // 넘어가는 데이터가 확실하다면 이 방식 사용해도 ㄱㅊ
        'emp_no' : empInfo.emp_no
    }
    */
   
    let empInfo = req.body.param; 
    let empData = {}; // sql.js에 칼럼이 명시되어있지 않음.
    for(let column of empTable) { // let column = 'emp_no'
        let value = empInfo[column]; // let value = empInfo['emp_no'] // 내부 값(필드명) 하나씩 꺼냄
        if(value == '') continue; 
        empData[column] = value; // empData['emp_no'] // value가 비어있을 때 필요한 값을 골라내서 새로운 목록을 배열 형태로 담음
    }
    let result = await mysql.query('emp', 'insert', empData);
    console.log('empData: ', empData)

    let deptEmpData = []; // sql.js 칼럼이 명시되어있어 배열로 넘어가야함. ?가 1개 이상쓰는 경우 배열 사용.
    // 넘어온 값이 배열 크기보다 더 많을 땐 버림. 넘어온 값이 더 많을 땐 오류
    for(let column of deptEmpTable) {
        let value = empInfo[column]; 
        if(value == '') continue; 
        deptEmpData.push(value); 
    }
    result = await mysql.query('empDept', 'insert', deptEmpData);
    console.log('deptEmpData: ', deptEmpData);

    let salData = {};
    for(let column of salariesTable) {
        let value = empInfo[column];
        if(value == '') continue;
        salData[column] = value;
    }
    salData.to_date = '9999-01-01';
    result = await mysql.query('sal', 'insert', salData);
    console.log('salData: ', salData);

    res.send(result);
    //res.end();
});

// 수정
// ?가 두 개이상이면 무조건 배열로, 오브젝트인지는 ? 앞에 칼럼이 명시되어있는지 확인.
// set ? => 오브젝트 // emp_no = ? => 값
app.put('/emps/:no', async(req, res) => {
    let data = [req.body.param, req.params.no];
    let result = await mysql.query('emp', 'update', data);
    res.send(result);
});

// 삭제 delete는 get을 확장한 부분이기에 body가 없음 express, 플라스크, 장고(Python) 같은 일부 프레임워크는 지원하고 있음
app.delete('/emps/:no', async(req, res) => {
    let data = [req.body.param.to_date, req.params.no]; // 두 값 다 일반 값
    let del = await mysql.query('empDept', 'delete', data);
    res.send(del);
});