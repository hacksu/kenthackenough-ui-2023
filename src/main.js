import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

if (window.location.protocol == 'http:' && window.location.host.indexOf('khe.io') >= 0) {
  window.location.href = window.location.href.replace('http:', 'https:');
};

// const scrollPos = 0;
// window.addEventListener('scroll', event => {
//   console.log('scroll', event);
//   // console.log('scroll', event.target.activeElement);
//   if (event.target.activeElement && event.target.activeElement.id === 'mapIframe') {
//     event.preventDefault();
//     event.target.activeElement.blur();
//     // event.target.activeElement = document.body;
//   }
// })

// window.addEventListener('focusin', event => {
//   console.log('focused', event);
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
