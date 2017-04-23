import Vue from 'vue'
import vueVuex from 'vuex'

Vue.use(vueVuex);

// 20170217193559
// 'GET', "http://localhost:8080/json/users",

var  POSITIVE = 0;
var  NEGATIVE = 1;
var  ALL = 2;

var state = {
  "goodsShow": true,
  "selectType":ALL,
  "onlyContent":false,
  "newbi": "0", //是否注册
  "serverIP": "http://localhost:8080/",
  "leftmenuShow": false //是否显示菜单
}

var getters = {
  stime:function () {
    return new Date().getTime()
  }
}


var mutations = {
 go(state,s){
   s[0].push({path:`/${s}`})
 }
}

export default new vueVuex.Store({
  state:state,
  mutations
})
