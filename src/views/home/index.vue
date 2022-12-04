<template>
  <!--        首页入口-->
  <div class="home-entry">
    <div class="container">
      <!--          左侧分类-->
      <home-category/>
      <!--          轮播图-->
      <home-banner/>
    </div>

<!--    新鲜好物-->
    <home-new/>
<!--    人气好物-->
    <home-hot/>
  </div>
</template>

<script>
import homeCategory from "@/views/home/components/home-category";
import homeBanner from "@/views/home/components/home-banner";
import homeNew from "@/views/home/components/home-new";
import homeHot from "@/views/home/components/home-hot";
export default {
  name: 'xtx-home-page',
  components: {
    homeCategory,
    homeBanner,
    homeNew,
    homeHot
  }
}
</script>

<style scoped lang='less'>

</style>
