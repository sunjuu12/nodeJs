<template>
    <div class="container">
        <table class="table">
            <caption>Total : {{ count }}</caption>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>나이</th>
                    <th>가입 일자</th>
                </tr>             
            </thead>
            <tbody>
                <tr :key="idx" v-for="(user, idx) in userList" @click="goToUseInfo(user.user_id)">
                    <td>{{ user.user_no }}</td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ user.user_age }}</td>
                    <td>{{ dateFormat(user.join_date, 'yyyy년MM월dd일') }}</td>
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
            userList : []
        }
    },
    // 프로퍼터는 있으나 값은 가지지 않음
    computed : {
        count() {
            return this.userList.length;
        }
    },
    // 컴포넌트가 초기화할 데이터 관련 진행
    created() {
        this.getUserList();
    },
    // 통신을 일으키는 코드는 별도의 메소드로 진행
    methods : {
        async getUserList() {
            let list = (await axios.get('/api/users')
                              .catch(err => {
                                console.log(err);
                              })).data; // 객체 안에서 특정 데이터릐 값을 가지고 옴. 전체적으로 괄호해준 후, .data로 가져와야함.
            this.userList = list;
        },
        goToUseInfo (id) {
            this.$router.push({path : '/userInfo', query : { userId : id }}); // 직접적으로 라우터를 불러오는 것
            // query
            // name : route로 등록할 때 사용한 name 속성
            // params : rest 방식. path 속성이 '/target/:id'(서버측에서 사용하는 방식) 일 때 {'id' : 100} 경로가 어떤 값을 받을지 지정돼있을 때 사용.
        },
        dateFormat(value) { // date 클래스 사용 시 date를 자동으로 날짜로 인식
            // YYYY년 MM월 dd일
            let date = new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2); // 경우의 수와 상관없이 무조건 두 자리 수
            let day = ('0' + date.getDate()).slice(-2);
            /*
            let result = format.replace('yyyy', year) // -이나 /를 쓸 경우에도 사용할 수 있도록 적용한 코드임
                                .replace('MM', month)
                                .replace('dd', day);
            return result;
            */
            return `${year}년 ${month}월 ${day}일`
        }
    }
}
</script>