<template>
<!-- slot이 있는 경우 여는 태그, 닫는 태그 구분 해줘야함 default는 이름이 없는 슬롯 -->
  <Layout>
    <template v-slot:header>
        <h1>팝업 제목</h1>
    </template>
    <template v-slot:default>
        <p>팝업 컨텐츠 1</p>
        <p>팝업 컨텐츠 2</p>
    </template>
    <template v-slot:footer>
        <button type="button">닫기</button>
    </template>
  </Layout>
</template>

<script>
import Layout from './ModalLayout.vue'

export default {
    components : {
        Layout
    }
}
</script>