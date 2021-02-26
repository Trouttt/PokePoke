import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bulma/bulma.css";


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
