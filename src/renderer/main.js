/*
 * @Author: PZT123456 2844929578@qq.com
 * @Date: 2022-08-11 18:04:12
 * @LastEditors: PZT123456 2844929578@qq.com
 * @LastEditTime: 2022-08-12 10:51:48
 * @FilePath: \my-project\src\renderer\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import "./assets/icon";
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
