import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Router from 'vue-router'
// Vue.use(Router) // 引入路由
// import router from './router/index.js'
// Vue.use(router)
import router from '@/router/index.js'

import App from './App'

Vue.config.productionTip = false

Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
