<template>

  <div class="container">
    <p>{{$store.state.moduleA.username}}</p>
    <p>{{$store.getters.newName}}</p>
    <p>{{$store.mutations.newName}}</p>

  </div>


</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {

  }
}
</script>
<style lang="less">

</style>
