import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '../page/index.vue'
import about from '../page/about.vue'
import zixun from '../page/zixun.vue'
import lianxi from '../page/lianxi.vue'

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: index},
        {path: '/index', component: index},
        {path: '/about', component: about},
        {path: '/zixun', component: zixun},
        {path: '/lianxi', component: lianxi},
    ]
})
