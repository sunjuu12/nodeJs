<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">empNo.</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.emp_no" />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">firstName</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.first_name" />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">lastName</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.last_name" />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">gender</th>
                    <td class="text-center">
                        <input type="radio" value="M" v-model="empInfo.gender" />남자
                        <input type="radio" value="F" v-model="empInfo.gender" />여자
                    </td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">hireDate</th>
                    <td class="text-center">
                        <input type="date" v-model="empInfo.hire_date" />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">salary</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.salary" />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">deptNo</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.dept_no" />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">deptName</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.dept_name" />
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <button class="btn btn-success" @click="updateInfo">저장</button>
            <button class="btn btn-success" @click="insertInfo">등록</button>

        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            empInfo : {
                emp_no : '',
                first_name: '',
                last_name: '',
                gender: '',
                hire_date: '',
                salary: '',
                dept_no: '',
                dept_name: ''
            },
            searchNo : ''
        }
    },
    created() {
        //this.empInfo.hire_date = $dateFormat(this.empInfo.hire_date, 'yyyy-MM-dd');
        this.searchNo = this.$route.query.eno;
        this.getEmpInfo();
    },
    methods : {
        async insertInfo() {
            if(this.validation()) return;
            let data = {
                param : this.empInfo
            }
            let result = await axios.post(`/api/emps`, data)
                                    .catch(err => console.log(err));
            console.log(result.data);
            if(result.data.insertId == 0) {
                alert(`등록되지 않았습니다. \n 메시지를 확인해주세요. \n ${result.data.message}`);
            } else {
                alert(`정상적으로 등록되었습니다. \n No. : ${result.data.insertId}`);
            }
        },
        validation() {
            if(this.empInfo.emp_no == '') {
                alert('사원번호가 입력되지않았습니다.');
                return false;
            } 
            if(this.empInfo.dept_no == '') {
                alert('부서번호가 입력되지않았습니다.');
                return false;
            }
            return true;
        },
        async getEmpInfo() {
            let result = await axios.get(`/api/emps/${this.searchNo}`)
                                     .catch(err => console.log(err));
             console.log('EmpInfo: ', result);
             this.empInfo = result.data;
        },
        async updateInfo() {
            let data = {
                param : this.empInfo
            };
            let result = await axios(`/api/emps/${this.empInfo.emp_no}`, {
                                    method: 'put',
                                    headers: {
                                        'content-type' : 'application/json'
                                    },
                                    data : JSON.stringify(data)
                        })
                        .catch((err) => console.log(err));
        console.log(result.date);
        if(result.data.changedRows == 0) {
            alert(`수정되지 않았습니다. \n 메시지를 확인해주세요. \n ${result.data.message}`);
        } else {
            alert(`정상적으로 수정되었습니다.`)
        }
        }
    }  
}
</script>