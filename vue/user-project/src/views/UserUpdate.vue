<!-- UserUpdate -->
<template>
  <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">No.</th>
                    <td class="text-center">
                        <input type="text" v-model="userInfo.user_no" readonly />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">ID</th>
                    <td class="text-center">
                        <input type="text" v-model="userInfo.user_id" readonly />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">PASS</th>
                    <td class="text-center">
                        <input type="password" v-model="userInfo.user_pwd" />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">
                        <input type="text" v-model="userInfo.user_name" />
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                        <input type="radio" value="M" v-model="userInfo.user_gender" />남자
                        <input type="radio" value="F" v-model="userInfo.user_gender" />여자
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center">
                        <input type="number" v-model="userInfo.user_age" />
                    </td>
                </tr>
                <tr>
                    <!-- default로 사용 안 할 거임 -->
                    <th class="text-right table-primary">가입 일자</th>
                    <td class="text-center">
                        <input type="date" v-model="userInfo.join_date" />
                    </td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-success" @click="updateInfo">저장</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchNo : '',
            userInfo : {}
        }
    },
    created() {
        this.searchNo = this.$route.query.userId;
        this.getUserInfo();
    },
    methods : {
        async getUserInfo() {
             let result = await axios.get(`/api/users/${this.searchNo}`)
                                     .catch(err => console.log(err));
             console.log('UserInfo: ', result);
             this.userInfo = result.data;
             let newDate = this.dateFormat(this.userInfo.join_date, 'yyyy-MM-dd')
             this.userInfo.join_date = newDate;
        },
        dateFormat(value) {
            let date = new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        },
        async updateInfo() {
            //if(!this.validation()) return; // if문은 true일 때 동작 !가 빠지면 밑에 코드를 다 if문 안에 넣어야함.
    
            let data = {
                param : this.userInfo
            };
           let result = //await axios.put(`/api/users/${this.userInfo.user_id}`, data)
                                    //.catch(err => console.log(err));
                        await axios(`/api/users/${this.userInfo.user_id}`, {
                            method : 'put',
                            headers : {
                                'content-type' : 'application/json'
                            },
                            data : JSON.stringify(data)
                        })
                        .catch((err) => console.log(err));
            console.log(result.data);
            if(result.data.changedRows == 0) {
                alert(`수정되지 않았습니다. \n 메세지를 확인해주세요. \n ${result.data.message}`);
            } else {
                alert(`정상적으로 수정되었습니다.`);
            }
        },
        // validation() {
        //     if(this.userInfo.user_id == '') {
        //         alert('아이디가 입력되지않았습니다.');
        //         return false;
        //     }
        //     if(this.userInfo.user_pwd == '') {
        //         alert('비밀번호가 입력되지않았습니다.');
        //         return false;
        //     }
        //     return true;
        // }
    }
}
</script>

<style>

</style>