import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import goods from '../page/goods/goods.vue'
import user from '../page/user/user.vue'
import order from '../page/order/order.vue'
import err from '../page/err.vue'

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: goods},
    {path: '/user', component: user},
    {path: '/order', component: order},
  ]
})
