<template>
  <div>
    <swipe ref="swiper" :options="swipeOptions">
      <swipe-item class="item"><h1>0</h1></swipe-item>
      <swipe-item class="item"><h1>1</h1></swipe-item>
      <swipe-item class="item"><h1>2</h1></swipe-item>
    </swipe>
    <vc-button @click="prev">上一页</vc-button>
    <vc-button @click="next">下一页</vc-button>
  </div>
</template>

<script>
// 使用开源的https://github.com/wangdahoo/vswipe
import VcButton from '@/vcui/components/button'
export default {
  data() {
    return {
      swipeOptions: {
        startSlide: 0,
        speed: 300,
        auto: 3000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, slide) { console.log('slide changes') },
        transitionEnd: function(index, slide) { console.log('slide transition ends') }
      }
    }
  },
  components: {
    VcButton
  },
  methods: {
    next() {
      this.$refs.swiper.next()
    },

    prev() {
      this.$refs.swiper.prev()
    },

    callback(prev, current) {
      console.log(prev, current)
    }
  }
}
</script>

<style lang='scss'>
  .item {
    padding-top: 50px;
    background-color: #FFF;
    & h1 {
      color: #fff;
      font-size: 32px;
      line-height: 50px;
      text-align: center;
      font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
    }

    &:nth-of-type(1) h1 {
      color: #0a9dc7;
    }

    &:nth-of-type(2) h1 {
      color: #44cc00;
    }

    &:nth-of-type(3) h1 {
      color: #ffc900;
    }
  }
</style>
