<template>
  <div class="pd1">
    <h1 class="titile">UI</h1>
    <div class="parent pct100" flexcontainer justify-content-flex-start>
      <div v-for="(item, idx) in myRouter" :key="idx" class="children">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { constantRouterMap } from '../router'
export default {
  data() {
    return {
      constantRouterMap
    }
  },
  computed: {
    myRouter() {
      return constantRouterMap
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pd1 {
  padding: 1px;
}
.titile {
  width: 750px;
  padding: 50px 0;
  text-align: center;
}
.parent {
  flex-flow: row wrap;
  border-top: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
}
.children {
  height: 200px;
  line-height: 200px;
  text-align: center;
  flex: 0 0 33.333333%;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}
</style>
