<!-- UserInsert.vue -->
<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <!-- 객체 선언 후, 내부에 각각의 객체와 연결. 칼럼 이름은 db에 사용하는 이름과 같아야 함. -->
                <tr>
                    <th class="text-right table-primary">ID</th>
                    <td class="text-center">
                        <input type="text" v-model="userInfo.user_id" />
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
            <button class="btn btn-success" @click="insertInfo">저장</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; // 통신

export default {
    data() {
        return {
            userInfo : { // 서버 측에서 DB로 바로 보내기에 DB의 칼럼명과 동일하게 적어주는 것이 좋음.
                user_id : '',
                user_pwd : '',
                user_name : null,
                user_gender : null,
                user_age : 0,
                join_date : null
            }
        }
    },
    created() {
        this.userInfo.join_date = this.getToday();
    },
    methods : {
        async insertInfo() {
            if(!this.validation()) return; // if문은 true일 때 동작 !가 빠지면 밑에 코드를 다 if문 안에 넣어야함.
    
            let data = {
                param : this.userInfo
            };
           let result = //await axios.post(`/api/users`, data)
                                    //.catch(err => console.log(err));
                        await axios(`/api/users`, {
                            method : 'post',
                            headers : {
                                'content-type' : 'application/json'
                            },
                            data : JSON.stringify(data)
                        })
                        .catch((err) => console.log(err));
            console.log(result.data);
            if(result.data.insertId == 0) {
                alert(`등록되지 않았습니다. \n 메세지를 확인해주세요. \n ${result.data.message}`);
            } else {
                alert(`정상적으로 등록되었습니다. \n No. : ${result.data.insertId}`);
            }
        },
        getToday() {
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0' + (today.getMonth() + 1)).slice(-2);
            let day = ('0' + today.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        },
        validation() {
            if(this.userInfo.user_id == '') {
                alert('아이디가 입력되지않았습니다.');
                return false;
            }
            if(this.userInfo.user_pwd == '') {
                alert('비밀번호가 입력되지않았습니다.');
                return false;
            }
            return true;
        }
    }
}
</script>

<style>

</style>