import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss'
import '@/icons' // icon
import VSwipe from 'vswipe'
import Loading from '@/vcui/components/loading'
import VcToast from '@/vcui/components/toast'
import messageBox from '@/vcui/components/message-box'
import hljs from 'highlight.js' // 引入JS
import 'amfe-flexible/index.js'
import 'highlight.js/styles/googlecode.css' // 样式文件
Vue.directive('highlight', function(el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
// 加载组件
Vue.use(VSwipe)
Vue.use(Loading)
Vue.use(VcToast)
Vue.use(messageBox)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
