<template>
 <div>
    <h1 >loading</h1>
    <div class="item">
      <div>
        <vc-button @click="showloading(1)">loading调用</vc-button>
        <pre v-highlight>
          <code class="js" >
            const loading = this.$loading({
              'lock': true,
              'text': 'Loading',
              'background': 'rgba(0, 0, 0, 0.7)'
            })
            setTimeout(() => {
              loading.close()
            }, 2000)
          </code>
        </pre>
      </div>
      <div>
        <vc-button @click="showloading(2)">loading图标更换</vc-button>
        <pre v-highlight>
          <code class="js" >
            const loading = this.$loading({
              'lock': true,
              'text': 'Loading',
              'spinner': 'spinner5',
              'background': 'rgba(0, 0, 0, 0.7)'
            })
            setTimeout(() => {
              loading.close()
            }, 2000)
          </code>
        </pre>
      </div>
      <div>
        <vc-button @click="showloading(3)" v-loading.fullscreen.lock="fullscreenLoading">指令方式全屏</vc-button>
        <pre v-highlight>
          <code class="js" >
            v-loading.fullscreen.lock="fullscreenLoading"
          </code>
        </pre>
      </div>
      
      <div>
        <vc-button @click="showloading(4)">指令区域</vc-button>
        <div v-loading="loading2"
    vc-loading-text="拼命加载中"
    vc-loading-spinner="spinner2"
    vc-loading-background="rgba(0, 0, 0, 0.8)">
          1.<br>
          1.<br>
          1.<br>
          1.<br>
          1.<br>
          1.<br>
          1.<br>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import VcButton from '@/vcui/components/button'
export default {
  data() {
    return {
      fullscreenLoading: false,
      loading2: false
    }
  },
  components: {
    VcButton
  },
  methods: {
    showloading(type) {
      if (type === 1) {
        const loading = this.$loading({
          'lock': true,
          'text': 'Loading',
          'background': 'rgba(0, 0, 0, 0.7)'
        })
        setTimeout(() => {
          loading.close()
        }, 2000)
      } else if (type === 2) {
        const loading = this.$loading({
          'lock': true,
          'text': 'Loading',
          'spinner': 'spinner5',
          'background': 'rgba(0, 0, 0, 0.7)'
        })
        setTimeout(() => {
          loading.close()
        }, 2000)
      } else if (type === 3) {
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 2000)
      } else if (type === 4) {
        this.loading2 = !this.loading2
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
