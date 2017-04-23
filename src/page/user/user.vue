<template>
  <div id='user'>
    <header class="aui-bar aui-bar-nav">
      <a @click="toGoods()" class="aui-pull-left aui-btn">
        <span class="aui-iconfont aui-icon-left"></span>返回
      </a>
      <div class="aui-title">个人中心</div>
    </header>

    <article class="avatar-wrap">
      <span class="avatar"><img
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2075750630,4216747848&fm=117&gp=0.jpg"
        alt=""></span>
      <h2 class="name">别忘了微笑</h2>
      <p class="text">已经绑定微信</p>
    </article>

    <article @click="toOrder()" class="aui-bar aui-bar-nav aui-bar-light">
      <a class="aui-pull-left aui-btn">
        <span class="aui-iconfont ">我的订单</span>
      </a>
      <a class="aui-pull-right aui-btn ">
        <p>查看全部</p>
        <span class="aui-iconfont aui-icon-right"></span>
      </a>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    data: function () {
      return {
        goods: {},
        url: "http://oong0u6z4.bkt.clouddn.com/goodsList.json"
      }
    },
    computed: {},
    methods: {
      toGoods: function () {
        this.$router.push({path: '/'})
      },
      toOrder: function () {
        this.$router.push({path: '/order'})
      },

    },
    watch: {},

    created() {
      console.log(11);
    },
    beforeMount: function () {
      console.log(22);
    },
    mounted: function () {
      console.log(33);

    },

  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/css/aui.css";
  @import "../../assets/css/reset.css";
  #user {
    width: 100%;
    .avatar-wrap {
      background: #a7d2eb;
      position: relative;
      height: 160px;
      .avatar {
        position: absolute;
        top: 20px;
        left: 20px;
        img {
          border-radius: 50%;
          width: 100px;
          height: 100px;
        }
      }
      .name {
        position: absolute;
        top: 35px;
        left: 140px;
        color: #fff;
      }
      .text{
        position: absolute;
        top: 70px;
        left: 140px;
        color: #fff;
      }
    }
  }
</style>
