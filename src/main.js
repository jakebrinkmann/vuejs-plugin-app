// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Add the component from private myNpmIsGreat registry
import PreviewComponent from "vuejs-plugin-01";

Vue.config.productionTip = false
Vue.use(PreviewComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
