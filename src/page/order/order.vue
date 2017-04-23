<template>
  <div class='order'>
    <header class="aui-bar aui-bar-nav">
      <a @click="toUser()" class="aui-pull-left aui-btn">
        <span class="aui-iconfont aui-icon-left"></span>返回
      </a>
      <div class="aui-title">我的订单</div>
    </header>

    <article>
      <div class="aui-tab" id="tab">
      <div @click="active(index)" v-for='(item,index) of tablist' class="aui-tab-item "
           v-bind:class="{'aui-active':index == index_active}">{{item.name}}
      </div>
    </div></article>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'order',
    data: function () {
      return {
        index_active: false,
        tablist: [
          {status: 0, name: "全部"},
          {status: 1, name: "待付款"},
          {status: 2, name: "待成团"},
          {status: 3, name: "待发货"},
          {status: 4, name: "待收货"},
          {status: 5, name: "待收货"}
        ]
      }
    },
    computed: {
      // 仅读取，值只须为函数
      aDouble: function () {
        return this.a * 2
      },
      // 读取和设置
      aPlus: {
        get: function () {
          return this.a + 1
        },
        set: function (v) {
          this.a = v - 1
        }
      }
    },

    methods: {
      toUser: function () {
        this.$router.push({path: '/user'})
      },
      active: function (index) {
        this.index_active = index
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .order {
    width: 100%;
  }
</style>
