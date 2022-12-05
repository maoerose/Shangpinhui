import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import router from './router'

Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.use(less)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
