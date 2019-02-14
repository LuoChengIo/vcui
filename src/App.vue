<template>
  <div id="app">
    <transition name="page">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradeClass: 'ios'
    }
  },
  created() {
    // 不同的类型适用不同的类型页面切换效果
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      this.gradeClass = 'ios'
    } else {
      this.gradeClass = 'android'
    }
    document.querySelector('body').className = this.gradeClass
  },
  // dynamically set transition based on route change
  watch: {
    $route(to, from) {
      // 监听路由判断是否前进还是后退
      const root = document.getElementById('app')
      const routersArr =
        (sessionStorage.getItem('routers') &&
          sessionStorage.getItem('routers').split(',')) ||
        []
      if (routersArr.length === 0) {
        routersArr.push(from.path)
        routersArr.push(to.path)
      } else {
        if (routersArr.indexOf(to.path) !== -1) {
          root.setAttribute('transition-direction', 'back')
          routersArr.splice(routersArr.indexOf(to.path) + 1, 100)
        } else {
          root.setAttribute('transition-direction', 'forward')
          routersArr.push(to.path)
        }
      }
      sessionStorage.setItem('routers', routersArr.join(','))
    }
  },
  methods: {}
}
</script>

<style lang="scss">
body,
html,
#app {
  height: 100%;
  font-size: 28px;
}
/* .slide-transition {
  transition-duration: .3s;
  width: 100%;
}

.slide-enter, .slide-leave {
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
} */
.child-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  /* background-color: #f5f5f5 */
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
code {
  padding: 1em 0;
  background-color: #fafafa;
}
.pd40 {
  padding: 40px;
}
.item {
  border: 1px solid #eaeefb;
  padding: 24px;
}
h1,
h2 {
  font-weight: normal;
  margin: 20px 0;
}
a {
  color: #42b983;
}
</style>
