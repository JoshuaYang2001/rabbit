<template>
  <div class='xtx-carousel' @mouseenter="stop()" @mouseleave="start">
    <!--    图片容器-->
    <ul class="carousel-body">
      <!--      fade-->
      <li class="carousel-item" v-for="(item,i) in sliders" :key="i" :class="{fade:index === i}">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="">
        </RouterLink>
      </li>
    </ul>
    <!--    上一张-->
<!--    还差一个切换图片的功能-->
    <a  href="javascript:;" class="carousel-btn prev"><i class="iconfont icon-angle-left"></i></a>
    <!--    下一张-->
    <a href="javascript:;" class="carousel-btn next"><i class="iconfont icon-angle-right"></i></a>
    <!--    指示器-->
    <div class="carousel-indicator">
      <!--      active激活点-->
      <span v-for="(item,i) in sliders" :key="i" :class="{active: index === i}"></span>
    </div>
  </div>
</template>

<script>
import {onMounted, ref, watch} from "vue";

export default {
  name: 'XtxCarousel',
  props: {
    sliders: {
      type: Array,
      default: () => []
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  setup(props) {
    // 控制图片显示
    const index = ref(0)
    let timer = null
    const autoPlayFn = () => {
      // 防止定时器重复添加
      clearInterval(timer)
      timer = setInterval(() => {
        index.value++
        if (index.value >= props.sliders.length) {
          index.value = 0
        }
      }, props.duration) // duration 不要写0
    }
    // 需要监听slider数据变化，如果有数组，且autoplay为真，return true
    watch(() => props.sliders , (newVal) => { // () => props.sliders  为什么要写成函数的形式
      if (newVal.length && props.autoPlay) {
        autoPlayFn()
      }
    },{ immediate: true}) // immediate : true 让组件在渲染的时候立即执行，这样做可以使静态的轮播图片照样运行
    // 进入停止
    const stop = () => {
      if(timer) clearInterval(timer)
    }
    // 离开播放
    const start = () => {
      if(props.sliders.length && props.autoPlay) {
        autoPlayFn()
      }
    };
    onMounted(() => {
      clearInterval(timer)
    })
    return {index, timer, autoPlayFn,stop,start}
  }
}
</script>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;

  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~ span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, .2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
