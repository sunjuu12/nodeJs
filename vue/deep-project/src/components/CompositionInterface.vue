<template>
<!-- script 내부에 선언된 함수는 모두 선언해줘야 오류가 안 남. -->
    <div>
        <h3>{{ title }}</h3>
        <p>저자 : {{ author.name }}</p>
        <template v-if="isWrited">
            <p :key="idx" v-for="(info, idx) in author.books">{{ info }}</p>
        </template>
        <p v-else>아직 출간한 책이 없습니다.</p>
        <button @click="plusBookInfo">정보 업데이트</button>
    </div>
</template>
<script setup> // composition 이용 시, setup 사용
import { reactive, ref, computed, watch } from 'vue' // vue에 정의된 함수 불러오기
// data 옵션 : reactivem, ref
// computed 옵션 : computed
// watch 옵션 : watch
// methods 옵션 : 내부에 함수로 선언

const author = reactive({ // 반응형 추적하고 변경된 값을 읽어주어 실제로 데이터 프로퍼티에 적용된 것처럼 사용
    name : 'John Doe',
    books : [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery',
    ]
})

// 숫자나 단일 값은 reactive 사용 불가, ref 사용해야함.
const title = ref('제목을 입력해주세요.'); // title.value

// computed 한 객체 특정 필드에 나눠서 정의해야했다면 computed 쪼개지기어 개별개별  설정해줘야함
const isWrited = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No';
})

watch(author.books, (info) => {
        console.log(info[info.length - 1]);
})

const plusBookInfo = () => {
    let info = 'Node.js - Javascript Runtime';
    author.books.push(info);
}
</script>