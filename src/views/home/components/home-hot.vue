<template>
  <div class="home-hot">
   <home-panel title="人气推荐" subtitle="人气爆款 不容错过">
<!--      面板内容-->
     <div class="container">
       <ul ref="panel" class="goods-list">
         <li v-for="item in lists" :key="item.id">
           <RouterLink :to="`/product/${item.id}`">
             <img :src="item.picture" alt="">
             <p class="name">{{item.title}}</p>
             <p class="desc">{{item.alt}}</p>
           </RouterLink>
         </li>
       </ul>
     </div>
   </home-panel>
  </div>
</template>

<script>
import {ref} from "vue";
import {findHot} from "@/api/home";
import homePanel from "@/views/home/components/home-panel";
export default {
  name: "home-hot",
  components: {
    homePanel
  },
  setup() {
    const lists = ref([])
    findHot().then( data => {
      console.log(1)
      lists.value = data.list
      }
    )
    return {lists}
  }

}
</script>

<style scoped lang="less">
@import "src/assets/styles/variable";
@import "src/assets/styles/mixins";
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}

</style>
