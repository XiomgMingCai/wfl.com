<template>
    <header>
        <nav @click="test()" class="head-nav clearfix">
            <ul class="clearfix">
                <li><router-link  to="/" :exact="true" class=""><span>网站首页</span></router-link></li>
                <li><router-link  to="/about"  ><span>关于我们</span></router-link></li>
                <li><router-link  to="/zixun"  ><span>咨询中心</span></router-link></li>
                <li><router-link  to="/lianxi"  ><span>联系我们</span></router-link></li>
            </ul>
            <div class="logo">
               <router-link to="/">
                   <img style="height: 5rem;width: 5rem;" src="../assets/image/logo.png" alt="回到首页">
               </router-link>
            </div>
        </nav>
    </header>
</template>

<script type="text/ecmascript-6">
    // import logHeader from './log-header.vue'
    export default{
        data() {
            return {}
        },
        components: {},
        computed: {},
        methods: {
            test(){
                console.log(this.$router);
            }
        },
        watch: {},
        mounted(){

        }
    }
</script>

<style lang="less"  type="text/less" rel="stylesheet/less">
    /*@import '../../assets/css/variable.less';*/
    header {
        .head-nav {
            height: 9rem;
            width: 100%;
            background-color: #FFFFFF;
            position: relative;
            .logo {
                position: absolute;
                top: 2.25rem;
                left: 2.25rem;
            }
            ul {
                float: right;
                margin-top: 2.2rem;
                li {
                    display: inline-block;
                    a {
                        width: 10rem;
                        height: 4.5rem;
                        display: block;
                        text-align: center;
                        font-size: 16px;
                        &:hover {
                            background-color: black;
                            span {
                                color: #fff !important;
                            }
                        }
                        span {
                            line-height: 4.5rem;
                            color: #000;
                            font-size: 120%;
                            font-weight: 600;
                        }
                    }
                    a.router-link-active{
                        background-color: black;
                        span {
                            color: #fff !important;
                        }
                    }
                }
            }
        }
    }

</style>