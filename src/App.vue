<template>

  <div class="container">
  <div>{{store.state.moduleA.username}}</div>
    <div>{{store.getters['moduleA/newName']}}</div>
    <div>{{store.state.moduleB.age}}</div>
  <div>{{store.getters['moduleC/fuck']}}</div>
    <button @click="fn">123</button>
  </div>


</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    const fn = () => {
      store.commit("moduleB/changeName")
    }
    return {store,fn}
  }
}
</script>
<style lang="less">

</style>
