<template>
 <div class="pd40">
    <h1 >svg图标</h1>
    <div class="item">
      <div > 
        <svg-icon  icon-class="spinner" />
        <pre v-highlight >
          <code class="html" v-text="spine"></code>
        </pre>
      </div>
    </div>
    <h1>所有图标</h1>
    <div class="icons-wrapper">
      <div v-for="item of iconsMap" :key="item">
        <div class="icon-item">
          <svg-icon class-name="disabled" :icon-class="item" />
          <span>{{item}}</span>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import icons from './generateIconsView'
export default {
  name: 'icons',
  data() {
    return {
      spine: '<svg-icon  icon-class="spinner" />',
      iconsMap: []
    }
  },
  mounted() {
    const iconsMap = icons.state.iconsMap.map((i) => {
      return i.default.id.split('-')[1]
    })
    this.iconsMap = iconsMap
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    }
  }
}
</script>
<style lang='scss' scoped>
  .icons-wrapper {
    margin: 0 auto;
  }
  .icon-item {
    margin: 20px;
    height: 110px;
    text-align: center;
    width: 160px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 10px;
  }
  .disabled{
    pointer-events: none;
  }
</style>
