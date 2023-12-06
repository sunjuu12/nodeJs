<template>
    <div>
        <!-- 바인드 디렉티브가 붙기 전까진 문자열임. 붙게되면 자바스크립트임으로 ''로 묶어줘야함 :만 붙여줘도 바인드 디렉티브로 인식 -->
        <PageTitle title="Hello, world!" /> 
        <!-- <PageContent :title="header" 
                      v-bind:count="10"
                      :writer="['Adward']"
                      :regdate="'2023-12-05'"
                      :content="{ first : 'Node.js', second : 'Vue.js'}" /> -->
        <!-- props 값이 통으로 넘어올 때 사용 info는 객체 타입 info의 필드명이 자식 컴포넌트에 등록되어 있어야함. 여러개의 값을 움직일 때 유용 -->
        <PageContent v-bind="info" @update-info="handler" /> 
        <RefComponent ref="child" />
        <button @click="childHandler">자식 제어</button>
    </div>
</template>

<script>
// PropsComponent.vue
import PageTitle from './PageTitle.vue'
import PageContent from './PageContent.vue'
import RefComponent from './RefComponent.vue'

export default {
    data() {
        return {
            header : '',
            info : {
                title : 'Today is',
                count : 0,
                writer  : 'Adward',
                regdate : '2023-12-05',
                content : '내용 없음'
            }
        }
    },
    components : {
        PageTitle,
        PageContent,
        RefComponent
    },
    methods : {
        handler(value) {
            alert(value);
        },
        childHandler() {
            // this.$refs.child.content = '부모가 보내는 데이터';
            // this.$refs.child.plusCount();
            // 태그가 가진 이벤트 강제 발생 (html에서 refs)
            this.$refs.child.$refs.cBtn.click();
        }
    }
}
</script>

<style>

</style>