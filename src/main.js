import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

if (window.location.protocol == 'http:' && window.location.host.indexOf('khe.io') >= 0) {
  window.location.href = window.location.href.replace('http:', 'https:');
};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
