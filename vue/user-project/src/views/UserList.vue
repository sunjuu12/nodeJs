<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>가입 날짜</th>
                </tr>             
            </thead>
            <tbody>
                <tr :key="idx" v-for="(user, idx) in userList">
                    <td>{{ user.user_no }}</td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ user.join_date }}</td>
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
            let list = (await axios.get('/users')
                              .catch(err => {
                                console.log(err);
                              })).data; // 객체 안에서 특정 데이터릐 값을 가지고 옴. 전체적으로 괄호해준 후, .data로 가져와야함.
            this.userList = list;
        }
    }
}
</script>