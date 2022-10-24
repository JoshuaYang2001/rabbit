<template>
      <div class="container">
<!--        首页入口-->
        <div class="home-entry">
<!--          左侧分类-->
        <home-category/>
<!--          轮播图-->
        </div>
      </div>
</template>

<script>
import homeCategory from "@/views/home/components/home-category";
export default {
  name: 'xtx-home-page',
  components:{
    homeCategory
  }
}
</script>

<style scoped lang='less'>

</style>
