// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css' // 引入公共样式

// axios请求插件
import axios from "axios"
Vue.prototype.axios = axios

// Vant有赞
import {Button, Row, Col, Swipe, SwipeItem, Lazyload, List} from 'vant';
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
