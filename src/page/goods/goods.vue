<template>
  <div class='goods'>
    <header style="position: fixed;top: 0;" class="aui-bar aui-bar-nav">
      <a class="aui-pull-left aui-btn aui-btn-outlined">
        <span class="aui-iconfont aui-icon-cart"></span>
      </a>
      <div class="aui-title">五峰土家族</div>
      <a class="aui-pull-right aui-btn aui-btn-outlined">
        <span @click="toUser()" class="aui-iconfont aui-icon-my "></span>
      </a>
    </header>
    <article class="lun-bo">
      <mt-swipe :auto="3000">
        <mt-swipe-item>
          <img class="lun-bo-img "
               src="http://www.hbwf.gov.cn/jcms/jcms_files/jcms1/web1/site/picture/0/130402173012112.jpg"
               alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="lun-bo-img "
               src="http://www.hbwf.gov.cn/jcms/jcms_files/jcms1/web1/site/picture/0/130402173140027.jpg"
               alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="lun-bo-img "
               src="http://www.wufenglan.com/Uploads/2016-12-04/584392f790a74.jpg"
               alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="lun-bo-img "
               src="http://www.wufenglan.com/Uploads/2016-12-01/583fe28a9ffa9.jpg"
               alt="">
        </mt-swipe-item>
      </mt-swipe>
    </article>

    <article class="aui-list ">
      <div ></div>
      <ul>
        <li class="aui-list-header">热销商品</li>
        <li style="" class="aui-media-list-item-inner list-item-inner" v-for="item in goods">
          <div style="width:66%;">
            <img :src="item.img" alt="item.title">
          </div>
          <div style="width:32%;" class="list-item-right aui-list-item-right">
            <h4 class="title">{{item.title}}</h4>
            <p style="display: none">{{item.text}}</p>
            <p class="Sale">月销售&nbsp;12份 </p>
            <p class="Praise">好评率&nbsp;98% </p>
            <span class="Price">¥{{item.Price}}/份 &nbsp;</span><span class="old">¥32</span>
          </div>
        </li>
      </ul>
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
    components: {},
    computed: {},
    methods: {
      toUser: function () {
        this.$router.push({path: '/user'})
      },
      _init: function () {
        //原生ajax
        var res, xmlhttp;
        xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            res = eval('(' + xmlhttp.responseText + ')');
        };
        xmlhttp.open('GET', this.url, false);//false 同步获取
        xmlhttp.send();

        this.goods = res.result
      }
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
      this.$nextTick(function () {
        this._init()
      })
    },

  }
</script>


<style lang="less" type="text/less"  rel="stylesheet/less">
  header {
    position: fixed;
    top: 0;
  }
  .lun-bo {
    margin-top: 45px;
    height: 200px;
    position: relative;
    .lun-bo-img {
      position: absolute;
    }
  }

  .list-item-inner {
    margin-top: 3px;
    padding: 5px;
    border: 1px solid #818181;
    height: 160px;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
  }

  .aui-list {
    .list-item-right {
      text-align: center;
      .title {
        color: #000;
        height: 32px;
        line-height: 32px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .Sale {
        font-size: 15px;
      }
      .Praise {
        font-size: 13px;
      }
      .Price {
        font-size: 15px;
        color: red;
      }
      .old {
        text-decoration: line-through;
      }
    }
  }

</style>
