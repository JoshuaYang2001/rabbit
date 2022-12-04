<template>
  <div class="home-new">

    <home-panel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore path="/"/>
      </template>
    </home-panel>
    <!-- 面板内容 -->

    <div class="container">
      <ul class="goods-list">
        <li v-for="item in goods" :key="item.id">
          <RouterLink :to="`/product/${item.id}`">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{item.name}}</p>
            <p class="price">&yen;{{item.price}}</p>
          </RouterLink>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
import homePanel from "@/views/home/components/home-panel";
import {ref} from "vue";
import {findNew} from "@/api/home";
export default {
  name: "home-new",
  components: {
    homePanel
  },
  setup(){
    const goods = ref([]);
    // 调用api拿数据
    findNew().then(data => {
      goods.value = data.result
    })
    return {goods}
  }

}
</script>


<style scoped lang="less">
@import "src/assets/styles/variable";
@import "src/assets/styles/mixins";
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
