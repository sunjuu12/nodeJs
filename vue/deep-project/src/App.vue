<template>
  <div>
    <input type="text" v-model.lazy="selected" v-focus="isFocused" /> 
    <!-- 동적 컴포넌트를 부여할 때 사용하는 방식 is 뒤에 컴포넌트에 등록된 컴포넌트 이름 부여, 라우터없이 전환할 때, 랜더링-->
    <component v-bind:is="selected" ></component> 
  </div>
</template>

<script>
import PropsCom from './components/PropsComponent.vue'
import SlotCom from './components/TextModal.vue'
import Composition from './components/CompositionInterface.vue'
import StoreCom from './components/StoreComponent.vue'

export default {
  name : 'app',
  data() {
    return {
      selected : "PropsCom",
      isFocused : false // 외부에서 동적으로 사용할 때 사용.
    }
  },
  components : {
    PropsCom, // 'PropsCom' : {} 변수 이름으로 추가하겠다는 것
    SlotCom,
    Composition,
    StoreCom
  }
}
</script>

<style>

</style>

