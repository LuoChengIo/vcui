import VcList from './src/list'

/* istanbul ignore next */
VcList.install = function(Vue) {
  Vue.component('vc-list', VcList)
}

export default VcList
