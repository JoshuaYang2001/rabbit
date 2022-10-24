<template>
  <nav>
    <AppTopnavVue/>
  </nav>
  <header>
    <AppHeader/>
    <app-header-sticky/>
  </header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>
    <AppFooter/>
  </footer>
<!--  <router-view/>-->
</template>

<script>
import AppTopnavVue from "@/components/app-topnav-vue";
import appHeaderSticky from "@/components/app-header-sticky";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import {useStore} from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: {
    AppTopnavVue,AppHeader,AppFooter,appHeaderSticky
  },
  setup(){
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang="less">

</style>
