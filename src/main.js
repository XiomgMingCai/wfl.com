import './assets/css/normaize.css'
import Vue from 'vue'
import store from 'store/store.js'
import router from 'router/router.js'
import layout from 'src/layout.vue'

Vue.config.productionTip = false;
document.execCommand("BackgroundImageCache", false, true)
/* eslint-disable no-new */
new Vue({
    router,
    store,
    beforeCreate: function () {
        // router.push({path: '/index'})
    },
    render: h => h(layout)
}).$mount('#app');

