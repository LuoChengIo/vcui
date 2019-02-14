<template>
  <div class="pd40">
    <h1>{{ btnJson.name }}</h1>
    <div class="item">
      <div v-for="(els, index) in btnJson.data" :key="index">
        <vc-button v-bind="els.attr">{{ els.title }}</vc-button>
        <pre v-highlight>
          <code class="html" v-text="els.html"></code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import VcButton from '@/vcui/components/button'
import btnJson from '@/vcui/components/button/data.json'
import waves from '@/directives/waves'
export default {
  name: 'HelloWorld',
  directives: {
    waves
  },
  components: {
    VcButton
  },
  data() {
    return {}
  },
  computed: {
    btnJson() {
      const obj = btnJson
      try {
        obj.data.forEach(element => {
          element.attr = JSON.parse(element.attr)
        })
      } catch (error) {
        console.log(error)
      }
      return obj
    }
  },
  mounted() {},
  methods: {
    showToast() {
      this.$toast({
        duration: 1500,
        message: '你好啊'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
