<template>
  <div class="pd40">
    <h1 >toast提示</h1>
    <div class="item">
      <div >
        <vc-button @click="showtost(1)">文本提示</vc-button>
        <pre v-highlight>
          <code class="js" >this.$toast('你好')</code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(2)">自定义10s时间</vc-button>
        <pre v-highlight>
          <code class="js" >this.$toast({ message: '你好', duration: 100000 })</code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(3)">自定义位置</vc-button>
        <pre v-highlight>
          <code class="js" >this.$toast({ message: '你好', top:'10%' })</code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(4)">成功提示</vc-button>
        <pre v-highlight>
          <code class="js" >this.$toast({ message: '提交成功', type: 'success' })</code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(5)">错误提示</vc-button>
        <pre v-highlight>
          <code class="js" >this.$toast({ message: '提交失败', type: 'error' })</code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(6)">警告提示</vc-button>
        <pre v-highlight>
          <code class="js" >this.$toast({ message: '提交失败', type: 'warning' })</code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import VcButton from '@/vcui/components/button'
export default {
  data() {
    return {

    }
  },
  components: {
    VcButton
  },
  methods: {
    showtost(type) {
      switch (type) {
        case 1: this.$toast('你好'); break
        case 2: this.$toast({ message: '你好', duration: 100000 }); break
        case 3: this.$toast({ message: '你好', top: '10%' }); break
        case 4: this.$toast({ message: '提交成功', type: 'success' }); break
        case 5: this.$toast({ message: '提交失败', type: 'error' }); break
        case 6: this.$toast({ message: '提交失败', type: 'warning' }); break
      }
    }
  }
}
</script>

<style lang='scss' scoped>

 
</style>
