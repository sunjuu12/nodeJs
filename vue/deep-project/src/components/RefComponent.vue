<template>
  <div>
    <input type="text" v-model.number="content" />
    <p>{{ content }}</p>
    <!-- html에서도 ref 속성 사용 가능 -->
    <button ref="cBtn" @click="plusCount">더하기</button>
  </div>
</template>

<script>
// ref 속성을 기반으로 props 속성 없이 사용
export default {
    data() {
        return {
            content : ''
        }
    },
    methods : {
        plusCount() {
            if((typeof this.content) == 'number') {
                let sum = Number(this.content) + 100;
                this.content = sum;
            } else {
                alert('데이터 타입이 숫자가 아닙니다.')
            }
        }
    }
}
</script>

<style>

</style>