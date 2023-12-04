<!-- UserInfo.vue -->
<template>
<!-- template은 모든 요소가 하나의 태그(최상위 태그)로 묶여있어야 함. -->
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">No.</th>
                    <td class="text-center">{{ userInfo.user_no }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">ID</th>
                    <td class="text-center">{{ userInfo.user_id }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">PASS</th>
                    <td class="text-center">{{ userInfo.user_pwd }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">{{ userInfo.user_name }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">{{ userGender }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center">{{ userInfo.user_age }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">가입 일자</th>
                    <td class="text-center">{{ joinDate }}</td>
                </tr>
            </table>
        </div>
        <!-- 수정, 삭제 버튼 -->
        <div class="row">
            <button class="btn btn-info" @click="goToUpdate(userInfo.user_id)">수정</button>
            <router-link to="/" class="btn btn-success">목록</router-link>
            <button class="btn btn-warning" @click="deleteInfo(userInfo.user_id)">삭제</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return { // 출력될 데이터를 들고 있어야함
            searchNo : '',
            userInfo : {}
        }
    },
    computed : {
        userGender() {
            return this.userInfo.user_gender == 'M' ? '남' : '여';
        },
        joinDate() {
            let date = new Date(this.userInfo.join_date);
            let year = date.getFullYear();
            let month = ('0' + date.getMonth() + 1).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        }
        
    },
    created() {
        this.searchNo = this.$route.query.userId; // 라우터를 이용해 호출이 들어오면 라우트가 동작해서 정보를 가지고 오는 옴.
        this.getUserInfo();
    },
    methods : { //vue에서 함수가 사용되면 methods 밑을 찾아보게 됨. methods에 모든 함수 작성.
        async getUserInfo() { // 비동기
             let result = await axios.get(`/api/users/${this.searchNo}`) // result는 객체로 넘어오기에 필요한 것을 직접 호출해야함. 상태코드를 받을 때도 있음.
                                     .catch(err => console.log(err));
             console.log('UserInfo: ', result);
             this.userInfo = result.data; // 서버 측에서 어떤 식으로 데이터를 넘겨주는지 확인하고 값을 가지고 와야함. axios는 .data에 값을 가지고 있음.
        },
        async deleteInfo(userId) {
            let result = await axios.delete(`/api/users/${userId}`)
                                    .catch(err => console.log(err));
            console.log('delete result: ', result);
            console.log('delete result.data: ', result.data);
            console.log('delete result.data.affectedRows: ', result.data.affectedRows);
            let count = result.data.affectedRows; // 삭제 시, affectedRows가 적합함.
            if (count == 0) {
                alert('정상적으로 삭제되지않았습니다.');
            } else {
                alert('정상적으로 삭제되었습니다.');
                // 정상적으로 삭제 시, redirect 이용하여 목록으로 이동
                this.$router.push({ name : 'userList'}); // 라우터에 등록된 name 불러오는 거임.
            }
        },
        goToUpdate(id) {
            this.$router.push({ path : '/userUpdate', query : { userId : id }})
        }
    }
}
</script>