<template>
    <footer>
        <ul>
            <li><span class="icon icon-zfywxk">支付业务许可证</span></li>
            <li><span class="icon icon-pcirk">PCI认证</span></li>
            <li><span class="icon icon-visayz">Visa 验证</span></li>
            <li><span class="icon icon-vsjmfw">VerSign加密服务</span></li>
            <li><span class="icon icon-wlgs">网络工商</span></li>
            <li><span class="icon icon-rzcx">电子商务协会认证诚信网</span></li>
            <li><span class="icon icon-gs">北京工商</span></li>
        </ul>
        <p>沃代付(北京)科技有限公司 版权所有 ® 2015-2017</p>
    </footer>
</template>

<script type="text/ecmascript-6">
    // import logHeader from './log-header.vue'
    export default{
        data() {
            return {}
        },
        components: {},
        computed: {},
        methods: {},
        watch: {},
        mounted(){

        }
    }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
    /*@import '../../assets/css/variable.less';*/
    footer {
        width: 100%;
        padding: 3rem 0 5rem;
        background-color: #ededed;
        p {
            text-align: center;
            color: #999;
        }
        ul {
            text-align: center;
            li {
                display: inline-block;
                .icon {
                    display: inline-block;
                    text-indent: -999rem;
                    margin-right: 1.5rem;
                    background: url(https://i.alipayobjects.com/e/201307/jebmKcbrh.png) no-repeat;
                    background-size: 466px 447px;
                    overflow: hidden;
                }
                .icon-zfywxk {
                    width: 38px;
                    height: 27px;
                    background-position: -369px -45px;
                }
                .icon-pcirk {
                    width: 78px;
                    height: 27px;
                    background-position: -110px -96px;
                }
                .icon-visayz {
                    width: 36px;
                    height: 27px;
                    background-position: -426px -90px;
                }
                .icon-vsjmfw {
                    width: 63px;
                    height: 27px;
                    margin-right: 13px;
                    background-position: -401px -186px;
                }
                .icon-wlgs {
                    width: 22px;
                    height: 27px;
                    background-position: -48px -48px;
                }
                .icon-rzcx {
                    width: 75px;
                    height: 27px;
                    background-position: 0 -320px;
                }
                .icon-gs {
                    width: 30px;
                    height: 30px;
                    margin-right: 0;
                    background: url(https://os.alipayobjects.com/rmsportal/lybcjqloSPjMAFg.png) no-repeat;
                    background-size: 30px;
                }
            }
        }
    }
</style>