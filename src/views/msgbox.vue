<template>
  <div class="pd40">
    <h1 >msgbox提示</h1>
    <div class="item">
      <div >
        <vc-button @click="showtost(1)">alert</vc-button>
        <pre v-highlight>
          <code class="js" >this.$alert('确定要返回身份认证吗？');</code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(2)">无title提示</vc-button>
        <pre v-highlight>
          <code class="js" >this.$msgbox({ message: '确定要返回身份认证吗？' })</code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(3)">修改title提示</vc-button>
        <pre v-highlight>
          <code class="js" >this.$msgbox({ message: '确定要返回身份认证吗？', title: '温馨提示' })</code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(4)">点击背景不能取消</vc-button>
        <pre v-highlight>
          <code class="js" >this.$msgbox({ message: '确定要返回身份认证吗？', closeOnClickModal: false })</code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(5)">关闭之前</vc-button>
        <pre v-highlight>
          <code class="js" >
            this.$msgbox({ message: '确定要返回身份认证吗？', 
              beforeClose: function(action, msgbox, close) {
              console.log(action)
              close()
            }});
          </code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(6)">回调方法</vc-button>
        <pre v-highlight>
          <code class="js" >
             this.$msgbox({ message: '确定要返回身份认证吗' }).then((cas) => {
              console.log(cas, 10)
            }).catch(action => {
              console.log(action, 11)
            }); 
          </code>
        </pre>
      </div>
      <div >
        <vc-button @click="showtost(7)">confirm</vc-button>
        <pre v-highlight>
          <code class="js" >
             this.$confirm('确定要返回身份认证吗？');
          </code>
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
        case 1: this.$alert('确定要返回身份认证吗？'); break
        case 2: this.$msgbox({ message: '确定要返回身份认证吗？' }); break
        case 3: this.$msgbox({ message: '确定要返回身份认证吗？', title: '温馨提示' }); break
        case 4: this.$msgbox({ message: '确定要返回身份认证吗？', closeOnClickModal: false }); break
        case 5: this.$msgbox({ message: '确定要返回身份认证吗？', showCancelButton: true, beforeClose: function(action, msgbox, close) {
          console.log(action)
          close()
        } }); break
        case 6: this.$msgbox({ message: '确定要返回身份认证吗' }).then((cas) => {
          console.log(cas, 10)
        }).catch(action => {
          console.log(action, 11)
        }); break
        case 7: this.$confirm('确定要返回身份认证吗？'); break
      }
    }
  }
}
</script>

<style lang='scss' scoped>

 
</style>
