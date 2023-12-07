<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>empNo</th>
                    <th>Name</th>
                    <th>hireDate</th>
                    <th>deptName</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(emp, idx) in empList" @click="goToEmpInfo(emp.emp_no)">
                    <td>{{ emp.emp_no }}</td>
                    <td>{{ `${emp.first_name}, ${emp.last_name}` }}</td>
                    <td>{{ $dateFormat(emp.hire_date, 'yyyy년 MM월 dd일') }}</td>
                    <td>{{ emp.dept_name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            empList : [] // 비어있는 상태
        }
    },
    computed : {
        count() {
            return this.empList.length;
        }
    },
    created() { // 페이지가 열렸을 때 데이터가 보여야하기에 실행 시킴.
        this.getEmpList();
    },
    methods : {
        async getEmpList() {
            let list = (await axios.get('/api/emps') // 실제 경로 http://localhost:8080/api/emps
                                   .catch(err => {
                                     console.log(err);
                                    }));
            this.empList = list.data;
        },
        goToEmpInfo(eno) { // 내부 라우터(내부에서 페이지 전환 시, 라우터로 정보를 넘겨줘야함)
            this.$router.push({ path : '/empInfo', query : { eno : eno }})

        }
    }
}
</script>