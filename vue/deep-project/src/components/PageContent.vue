<template>
  <table>
    <tr>
        {{ $dateFormat('2023/12/05', 'yyyy-MM-dd') }}
    </tr>
    <tr>
        <th> 제목</th>
        <td>{{ title }}</td>
        <th>조회수</th>
        <td>{{ readInfo }}</td>
    </tr>
    <tr>
        <th>작성자</th>
        <td>{{ writer }}</td>
        <th>작성 일자</th>
        <td>{{ regdate }}</td>
    </tr>
    <tr>
        <th>내용</th>
        <td>{{ content }}</td>
    </tr>
    <tr>
        <button @click="updateInfo">업데이트</button>
    </tr>
  </table>
</template>

<script>
//import AppMixin from '../mixin.js';

export default {
    // props : ['title', 'count', 'writer', 'regdate', 'content']
    // 유효성 체크할 때는 배열이 아닌 객체 형태로 받아야 함.
   // mixins : [AppMixin], // mixin 도 파일 분리 가능. 개별적으로 mixin하는 경우에만 이 방법으로 진행.
    props : {
        title : String, // 타입만 정의할 때
        count : { // 타입과 default값도 정의할 땐 객체로
            type : Number,
            default : 0
        },
        writer : { // 타입이 두가지 허용될 경우
            type : [String, Object],
            default : function() { // 값이 함수 형태, retrun 타입이 객체 타입. 
                return { first : 'Adward', second : 'Ian'}
            }
        },
        regdate : {
            required : true, // true 값을 주면 값이 안 넘어오면 안 됨
            validator : function(value) {
                // yyyy-MM-dd
                let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/
                return !(value.match(format) == null); // 값이 없으면 null 값 반환
            }
        },
        content :  String
    },
    computed : {
        readInfo() {
            return this.count + 1;
        }
    },
    methods : { //사용자의 동작에 대해서 emit을 이용해 부모 컴포넌트에 정보 전달.
        updateInfo() {
            // 내부에서 일어난 이벤트 전달
            this.$emit('update-info', this.readInfo);
        }
    },
    watch : {
        readInfo() { // 특정 값의 변화를 사용자에게 보여줄 때 사용, 실시간으로 부모에게 전달
            // 데이터 전달
            this.$emit('update-info') 
        }
    }

}
</script>

<style>

</style>