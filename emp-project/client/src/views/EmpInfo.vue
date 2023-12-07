<template>
  <div class="container">
    <div class="row">
        <table class="table">
            <tr>
                <th>empNo.</th>
                <td class="text-center">{{ empInfo.emp_no }}</td> <!-- empInfo는 EmpList에서 보낸 name과 동일해야함. -->
            </tr>
            <tr>
                <th>firstName</th>
                <td class="text-center">{{ empInfo.first_name }}</td>
            </tr>
            <tr>
                <th>lastName</th>
                <td class="text-center">{{  empInfo.last_name }}</td>
            </tr>
            <tr>
                <th>gender</th>
                <td class="text-center">{{ empGender }}</td>
            </tr>
            <tr>
                <th>hireDate</th>
                <td class="text-center">{{ $dateFormat(empInfo.hire_date, 'yyyy년MM월dd일') }}</td>
            </tr>
            <tr>
                <th>salary</th>
                <td class="text-center">{{ empInfo.salary }}</td>
            </tr>
            <tr>
                <th>deptNo.</th>
                <td class="text-center">{{ empInfo.dept_no }}</td>
            </tr>
            <tr>
                <th>deptName</th>
                <td class="text-center">{{ empInfo.dept_name }}</td>
            </tr>
        </table>
    </div>
    <div class="row">
        <button class="btn btn-info" @click="goToUpdate(empInfo.emp_no)">수정</button>
        <router-link to="/" class="btn btn-success">목록</router-link>
        <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)">삭제</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchNo : '', // 검색 조건 추적 용이
            empInfo : {}
        }
    },
    computed : {
        empGender() {
            return this.empInfo.gender == 'M' ? '남' : '여';
        }
    },
    created() {
        this.searchNo = this.$route.query.eno;
        this.getEmpInfo();
    },
    methods : {
         async getEmpInfo() { // delete는 기본적으로 body가 존재하지 않음
            let result = await axios.get(`/api/emps/${this.searchNo}`)
                                    .catch(err => console.log(err));
            this.empInfo = result.data;
         },
         async deleteInfo(eno) {
            // post처럼 값을 넘기는 부분이 없음
            // config의 data 속성을 이용하여 값을 집어넣음.
            let data = {
                param : {
                    to_date : '2023-12-07'
                }
            }
            let result = await axios.delete(`/api/emps/${eno}`, { data : data})
                                    .catch( err=> console.log(err));
            let count = result.data.affectedRows;
            this.empInfo = result.data;
            if(count == 0) {
                alert('정상적으로 삭제되지 않았습니다.');
            } else {
                alert('정상적으로 삭제되었습니다.');
                this.$router.push({ name : 'empList'})
            }
         },
        goToUpdate(no){
            this.$router.push({ path: '/empForm', query : { eno : no }})
        }
    }
}
</script>