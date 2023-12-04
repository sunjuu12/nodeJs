<template>
  <div>
    <Header /> <!-- 자식 component는 하나의 태그로 인식, Header의 template부분이 대체됨 -->
    <router-view/>
  </div>
</template>
<script>
import Header from './layouts/Header.vue'

export default {
  components : { // 자식 components 다 등록 (객체 형식으로 등록)
    Header // Header : Header 키와 값이 똑같을 땐 생략
  }  
}
</script>

