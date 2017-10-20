<template>
    <div>
        <wd-header></wd-header>
            <router-view>
                <wd-bout></wd-bout>
                <wd-index></wd-index>
                <wd-bout></wd-bout>
            </router-view>
        <wd-footer></wd-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import wdHeader from 'src/components/wd-header.vue'
    import wdFooter from 'src/components/wd-footer.vue'

    import wdIndex from 'src/page/index.vue'
    import wdBout from 'src/page/about.vue'
    import wdLianxi from 'src/page/lianxi.vue'
    import wdZixun from 'src/page/zixun.vue'

    export default{
        components: {
            wdHeader,
            wdFooter,
            wdIndex,
            wdBout,
            wdLianxi,
            wdZixun
        },

    }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
    /*@import '../../assets/css/variable.less';*/
</style>