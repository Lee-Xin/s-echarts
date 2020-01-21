import Vue from 'vue'
import App from './App.vue'
import _ from 'loadsh'
Vue.config.productionTip = false
Vue.prototype._ = _
new Vue({
  render: h => h(App),
}).$mount('#app')
