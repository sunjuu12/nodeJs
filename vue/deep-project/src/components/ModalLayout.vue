<template>
<!-- slot 사용하는 경우 공통적인 layout을 잡아주기 위해 자주 쓰임 slot 3개가 있다면 1개의 이름은 default로 사용 가능, 스타일에 scoped 속성 추가.-->
  <div class="modal-container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>