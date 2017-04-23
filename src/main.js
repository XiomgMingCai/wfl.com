
import Vue from 'vue'
import store from 'store/store.js'
import router from 'router/router.js'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

const data = {
  goods: [],
  url: "http://oong0u6z4.bkt.clouddn.com/goodsList.json"
};
document.execCommand("BackgroundImageCache", false, true)
/* eslint-disable no-new */
var vm = new Vue({
  router,
  store,
  data,
  template: `<div id="page">
<transition name="fade" mode="out-in">
    <router-view></router-view>
</transition>
</div>
`,
  created() {
    console.log(1);
  },
  beforeMount: function () {
    console.log(2);
  },
  mounted: function () {
    console.log(3);
  },
/*  beforeUpdata:function () {
    console.log(3.3);
  },
  updated:function () {
    console.log(3.6);
  },
  beforeDestroy:function () {
    console.log(4);
  },
  destroyed:function () {
    console.log(5);
  }*/

  /*beforeCreate: function () {
    //和服务器中断连接
    if (this.$store.state.serverIP == 0) {
      router.push({path: '/error'})
    }
    //判断是否为注册用户
    if (this.$store.state.newbi == true) {
      router.push({path: '/index'})
    } else {//欢迎页面
      router.push({path: '/Goods'})
    }
  }*/
}).$mount('#app');

