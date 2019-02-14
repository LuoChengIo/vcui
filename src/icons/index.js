import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件
import generateIconsView from '@//views/generateIconsView.js' // 用来展示所有的icon ，可以删除
// register globally
Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
const iconMap = requireAll(req)

generateIconsView.generate(iconMap) // 用来展示所有的icon ，可以删除
